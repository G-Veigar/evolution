const path = require('path')
const appConfig = require('./configs/index.js')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin')

// 转换appConfig.libcdn配置
const externals = {}
const cdn = {
  css: [],
  js: []
}
if (appConfig.libCdn) {
  const cdnjs = appConfig.libCdn.js
  if (cdnjs) {
    for (const libItem of cdnjs) {
      externals[libItem.lib] = libItem.external
      cdn.js.push(libItem.url)
    }
  }
}

module.exports = {
  devServer: {
    proxy: appConfig.proxy
  },
  publicPath: appConfig.publicPath,
  chainWebpack: config => {
    // loader 配置
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      // 图片压缩
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .tap(options => {
        return {
          mozjpeg: {
            progressive: true,
            quality: 80
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: true
          },
          pngquant: {
            quality: [0.75, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          webp: {
            quality: 80
          }
        }
      })

    config.module.rule('vue')
      .use('vue-loader').tap(options => {
        options.transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href']
        }
        return options
      })

    // plugin 配置
    config.plugins.delete('prefetch')

    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
      .end()

    config.plugin('define')
      .tap(args => {
        args[0]['process.appConfig'] = {
          ...appConfig
        }
        return args
      })
      .end()

    if (!appConfig.optimizeJs) {
      config.optimization.minimize(false)
      config.optimization.minimizers.delete('terser')
    }
  },
  configureWebpack: config => {
    const alias = config.resolve.alias
    config.resolve.alias = {
      ...alias,
      $c: path.resolve(__dirname, 'src/components/'),
      $util: path.resolve(__dirname, 'src/utils/'),
      $page: path.resolve(__dirname, 'src/views/pages/'),
      $style: path.resolve(__dirname, 'src/styles/'),
      $router: path.resolve(__dirname, 'src/router/'),
      $plugin: path.resolve(__dirname, 'src/plugins/')
    }
    // 配置新loader
    // config.module.rules.push({
    //   test: /\.(jpe?g|png|gif|svg|webp)$/,
    //   use: [
    //     {
    //       loader: 'img-loader',
    //       options: {
    //         plugins: [
    //           // doc: https://github.com/imagemin/imagemin-gifsicle
    //           require('imagemin-gifsicle')({
    //             interlaced: true, // Interlace gif for progressive rendering
    //             optimizationLevel: 3 // Select an optimization level between 1 and 3.
    //             // colors: 8 // 颜色位数 2-256
    //           }),
    //           // doc: https://github.com/imagemin/imagemin-mozjpeg
    //           require('imagemin-mozjpeg')({
    //             quality: 85, // Compression quality, in range 0 (worst) to 100 (perfect).
    //             progressive: true, // false creates baseline JPEG file.
    //             arithmetic: false
    //           }),
    //           // doc: https://github.com/imagemin/imagemin-pngquant
    //           require('imagemin-pngquant')({
    //             quality: [0.3, 0.8] // Instructs pngquant to use the least amount of colors required to meet or exceed the max quality. If conversion results in quality below the min quality the image won't be saved.
    //           }),
    //           // doc: https://github.com/imagemin/imagemin-svgo
    //           // doc: https://github.com/svg/svgo
    //           require('imagemin-svgo')({
    //             plugins: [
    //               { removeTitle: true },
    //               { convertPathData: false }
    //             ]
    //           })
    //         ]
    //       }
    //     }
    //   ]
    // })

    // config.plugins.push(new CspHtmlWebpackPlugin({
    //   'base-uri': "'self'",
    //   'object-src': "'none'",
    //   'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'", 'cdnjs.cloudflare.com'],
    //   'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'", 'cdnjs.cloudflare.com']
    // }, {
    //   enabled: true,
    //   hashingMethod: 'sha256',
    //   hashEnabled: {
    //     'script-src': true,
    //     'style-src': true
    //   },
    //   nonceEnabled: {
    //     'script-src': true,
    //     'style-src': true
    //   }
    // }))

    config.externals = externals

    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境 配置新plugin
      config.plugins.push(
        // 预渲染插件，必须配合路由的history模式才能使用，https://github.com/chrisvfritz/prerender-spa-plugin
        // FIXME: 预渲染配置抽离到配置文件
        // TODO: 预渲染配置抽离到配置文件
        // TAG: 预渲染配置抽离到配置文件
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: appConfig.prerenderRouteList
        })
      )
    }
  }
}

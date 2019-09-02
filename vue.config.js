const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const webpack = require('webpack')
// const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin')

// doc: https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx
const externals = {
  dev: {
  },
  build: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios'
  }
}

const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
    ],
    js: [
    ]
  },
  // 生产环境
  build: {
    css: [
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
    ],
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js'
    ]
  }
}

module.exports = {
  chainWebpack: config => {
    // loader 配置
    config.module
      .rule('images')
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
            quality: '75-90',
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

    // plugin 配置
    config.plugins.delete('prefetch')

    config.plugin('html')
      .tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].cdn = cdn.build
        }
        if (process.env.NODE_ENV === 'development') {
          args[0].cdn = cdn.dev
        }
        return args
      })
      .end()
  },
  configureWebpack: config => {
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

    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      config.externals = externals.build
      // 为生产环境 配置新plugin
      config.plugins.push(
        // 预渲染插件
        // new PrerenderSPAPlugin({
        //   staticDir: path.join(__dirname, 'dist'),
        //   routes: ['/ui']
        // }),
        // 开启作用域提升(scope hoisting) https://webpack.docschina.org/plugins/module-concatenation-plugin/#src/components/Sidebar/Sidebar.jsx
        new webpack.optimize.ModuleConcatenationPlugin()
      )
    } else if (process.env.NODE_ENV === 'development') {
      config.externals = externals.dev
    }
  }
}

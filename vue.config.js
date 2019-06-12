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
    config
      .plugin('html')
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
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg|webp)$/,
      use: [
        {
          loader: 'img-loader',
          options: {
            plugins: [
              // doc: https://github.com/imagemin/imagemin-gifsicle
              require('imagemin-gifsicle')({
                interlaced: true, // Interlace gif for progressive rendering
                optimizationLevel: 3 // Select an optimization level between 1 and 3.
                // colors: 8 // 颜色位数 2-256
              }),
              // doc: https://github.com/imagemin/imagemin-mozjpeg
              require('imagemin-mozjpeg')({
                quality: 85, // Compression quality, in range 0 (worst) to 100 (perfect).
                progressive: true, // false creates baseline JPEG file.
                arithmetic: false
              }),
              // doc: https://github.com/imagemin/imagemin-pngquant
              require('imagemin-pngquant')({
                quality: [0.3, 0.8] // Instructs pngquant to use the least amount of colors required to meet or exceed the max quality. If conversion results in quality below the min quality the image won't be saved.
              }),
              // doc: https://github.com/imagemin/imagemin-svgo
              // doc: https://github.com/svg/svgo
              require('imagemin-svgo')({
                plugins: [
                  { removeTitle: true },
                  { convertPathData: false }
                ]
              })
            ]
          }
        }
      ]
    })

    if (process.env.NODE_ENV === 'production') {
      config.externals = externals.build
    } else if (process.env.NODE_ENV === 'development') {
      config.externals = externals.dev
    }
  }
}

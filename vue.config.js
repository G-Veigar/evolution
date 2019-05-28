module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
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
                  }),
                  // doc: https://github.com/imagemin/imagemin-webp
                  require('imagemin-webp')({
                    quality: 80
                  })
                ]
              }
            }
          ]
        }
      ]
    }
  }
  // chainWebpack: config => {
  // config.module
  //   .rule('images')
  //   .test(/\.(jpe?g|png|gif|svg)$/)
  //   .use('img-loader')
  //   .loader('img-loader', {
  //   })
  //   .end()
  // }
}

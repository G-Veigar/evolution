module.exports = ({ file, options, env }) => {
  // let filePath = file.dirname
  // // 第三方库的白名单，会被postcss-px-to-viewport处理
  // let whiteList = ['mand-mobile']
  // // 拼接/node_modules/
  // // whiteList = whiteList.map(item => {
  // //   return '/node_modules/' + item
  // // })
  // // 是否在白名单
  // let isInWhiteList = whiteList.find(item => {
  //   return filePath.includes(item)
  // })
  // let viewportIgnore
  // // 不在白名单
  // if (!isInWhiteList) {
  //   viewportIgnore = filePath.includes('/node_modules/')
  // } else {
  //   viewportIgnore = true
  // }
  // if (file.dirname.includes('mand-mobile')) {
  //   console.log('mand-mobile', viewportIgnore)
  // }
  // let viewportIgnore = false
  return {
    plugins: {
      'autoprefixer': {},
      'postcss-preset-env': {
        stage: 2
      },
      // 'cssnano': {},
      // doc: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
      'postcss-px-to-viewport': {
        viewportWidth: 750, // (Number) 设计稿的视口宽度
        unitPrecision: 5, // (Number) 单位转换后保留的精度
        viewportUnit: 'vw', // (String) 希望使用的视口单位
        fontViewportUnit: 'vw', // (String) 字体使用的视口单位
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
        minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        mediaQuery: false // (Boolean) 媒体查询里的单位是否需要转换单位
      }
    }
  }
}

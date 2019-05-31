// module.exports = {
//   plugins: {
//     autoprefixer: {},
//     // doc: https://preset-env.cssdb.org/
//     'postcss-preset-env': {
//       stage: 2 // 建议实际使用stage 2以上的特性 doc: https://cssdb.org/#stage-0
//     }
//     // webpcss: {}
//   }
// }

module.exports = ({ file, options, env }) => {
  // 判断是否是第三方库的css
  let isNodeModulesCss = file.dirname.includes('/node_modules/')
  return {
    plugins: {
      'autoprefixer': {},
      'postcss-preset-env': {
        stage: 2
      },
      // doc: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
      'postcss-px-to-viewport': isNodeModulesCss ? false : {
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

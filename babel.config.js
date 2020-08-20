/*
 * @Author: 高歌
 * @Date: 2020-05-13 01:08:00
 * @LastEditTime: 2020-08-14 19:55:53
 * @LastEditors: 高歌
 * @FilePath: /evolution/babel.config.js
 * @Description:
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ]
}

/*
 * @Author: gaoge
 * @Date: 2019-12-20 02:02:48
 * @Last Modified by: gaoge
 * @Last Modified time: 2020-04-10 17:15:52
 * app配置文件，使用webpackDefinePlugin，配合代码压缩，可以在构建时去除无用代码。
 * 本文件是构建时文件(node环境)，不是运行时文件，不会被打包到dist中
 * 修改此文件不能自动刷新，需重新npm run dev
 */

const configs = {
  // vconsole调试工具是否直接开启
  vconsole: false,
  // vconsole秘钥
  vconsoleSecret: JSON.stringify('openvconsole2020'),
  // js压缩，关闭js压缩可以方便查看打包编译后的代码
  optimizeJs: true,
  // 埋点，默认：prod
  track: false,
  // vue devtools, 默认：dev
  devtools: true,
  // 自定义的tool工具组件
  toolComponet: true,
  // devServer的proxy：https://cli.vuejs.org/zh/config/#devserver-proxy
  proxy: 'https://www.easy-mock.com/mock/5ddea9a786f1b9143b86d20a',
  // vue.config.js的publicPath
  publicPath: '/',
  // 第三方库的CDN配置，将从构建中剔除，并使用CDN引入
  libCdn: {
    css: [],
    js: []
  },
  // 是否拦截并修改API的response，不要禁止在生产中打开
  modResponse: true
}

module.exports = configs

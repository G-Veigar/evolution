/* app配置文件，使用webpackDefinePlugin，配合代码压缩，可以在构建时去除无用代码。
** 本文件是构建时文件(node环境)，不是运行时文件，不会被打包到dist中
** 修改此文件不能自动刷新，需重新npm run dev */
// eslint-disable-next-line no-unused-vars
const prod = (process.env.NODE_ENV === 'production')
// eslint-disable-next-line no-unused-vars
const dev = (process.env.NODE_ENV === 'development')

/* 配置说明：
** prod:  仅在生产环境开启
** dev:   仅在开发环境开启
** false: 都不开启
** true:  都开启 */
const configs = {
  // vconsole调试工具非生产环境下是否开启
  vconsole: dev,
  // js压缩，关闭js压缩可以方便查看打包编译后的代码
  optimizeJs: true,
  // 埋点，默认：prod
  track: prod,
  // vue devtools, 默认：dev
  devtools: dev,
  // devServer的proxy：https://cli.vuejs.org/zh/config/#devserver-proxy
  proxy: 'https://www.easy-mock.com/mock/5ddea9a786f1b9143b86d20a'
}

module.exports = configs

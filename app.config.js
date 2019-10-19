// app配置文件，使用webpackDefinePlugin，配合代码压缩，可以在构建时去除无用代码。
// 修改此文件不能自动刷新，需重新npm run dev
let appConfig = {
  // vconsole调试工具
  vconsole: false
}

module.exports = appConfig

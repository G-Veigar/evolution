/*
 * @Author: gaoge
 * @Date: 2019-12-20 02:04:42
 * @Last Modified by: gaoge
 * @Last Modified time: 2020-01-03 11:35:49
 * app配置文件，使用webpackDefinePlugin，配合代码压缩，可以在构建时去除无用代码。
 * 本文件是构建时文件(node环境)，不是运行时文件，不会被打包到dist中
 * 修改此文件不能自动刷新，需重新npm run dev
 */

let configs = {
  // vconsole调试工具是否直接开启
  vconsole: false,
  // vconsole秘钥
  vconsoleSecret: JSON.stringify('openvconsole2020'),
  // js压缩，关闭js压缩可以方便查看打包编译后的代码
  optimizeJs: false,
  // 埋点，默认：prod
  track: true,
  // vue devtools, 默认：dev
  devtools: false,
  // 自定义的tool工具组件
  toolComponet: false,
  // vue.config.js的publicPath
  publicPath: 'evolution/dist/',
  // 第三方库的CDN配置，将从构建中剔除，并使用CDN引入
  libCdn: {
    css: [],
    // 手动管理好依赖顺序
    js: [{
      // 库名称
      lib: 'vue',
      // CDN链接
      url: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.min.js',
      // webpack externals key值 https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx
      external: 'Vue'
    },
    {
      lib: 'vue-router',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min.js',
      external: 'VueRouter'
    },
    {
      lib: 'vuex',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js',
      external: 'Vuex'
    },
    {
      lib: 'axios',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
      external: 'axios'
    }]
  },
  // 预渲染路由列表
  prerenderRouteList: [
    '/mine'
  ]
}

module.exports = configs

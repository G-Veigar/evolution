/* app配置文件，使用webpackDefinePlugin，配合代码压缩，可以在构建时去除无用代码。
** 本文件是构建时文件(node环境)，不是运行时文件，不会被打包到dist中
** 修改此文件不能自动刷新，需重新npm run dev */
// eslint-disable-next-line no-unused-vars
const prod = (process.env.NODE_ENV === 'production')
// eslint-disable-next-line no-unused-vars
const dev = (process.env.NODE_ENV === 'development') || (!process.env.NODE_ENV)

/* 配置说明：
** prod:  仅在生产环境开启
** dev:   仅在开发环境开启
** false: 都不开启
** true:  都开启
** Object.dev 在开发环境的配置
** Object.prod 在生产环境的配置 */
let configs = {
  // vconsole调试工具非生产环境下是否开启
  vconsole: dev,
  // js压缩，关闭js压缩可以方便查看打包编译后的代码
  optimizeJs: true,
  // 埋点，默认：prod
  track: prod,
  // vue devtools, 默认：dev
  devtools: dev,
  // devServer的proxy：https://cli.vuejs.org/zh/config/#devserver-proxy
  proxy: 'https://www.easy-mock.com/mock/5ddea9a786f1b9143b86d20a',
  // vue.config.js的publicPath
  publicPath: {
    dev: '/',
    prod: '/'
    // prod: 'evolution/dist/'
  },
  // 第三方库的CDN配置，将从构建中剔除，并使用CDN引入
  libCdn: {
    dev: {
      css: [],
      js: []
    },
    prod: {
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
    }
  }
}

for (let key in configs) {
  if (typeof configs[key] !== 'object') continue
  if (dev) {
    configs[key] = configs[key].dev || null
  } else if (prod) {
    configs[key] = configs[key].prod || null
  }
}

module.exports = configs

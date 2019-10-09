import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 特征检测库modernizr
import './utils/modernizr'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import plugins from './plugins'
// import 'normalize.css'
import 'modern-normalize'

import('./styles/base.css')

// 根据特性检测 判断是否需要hacks视口单位
let noNeedHacks = Modernizr.cssvwunit && Modernizr.cssvhunit && Modernizr.cssvmaxunit && Modernizr.cssvminunit
if (noNeedHacks) {
  viewportUnitsBuggyfill.init()
} else {
  // 修复老旧浏览器（Mobile Safari） Viewport Units的怪异问题 https://github.com/rodneyrehm/viewport-units-buggyfill
  // hacks参数模拟不支持的老旧浏览器的 Viewport Units
  viewportUnitsBuggyfill.init({
    hacks
  })
}

Vue.config.productionTip = false
// Vue.config.performance = true

// 注册全局vue插件
plugins.forEach(plugin => {
  Vue.use(plugin)
})

let rootVue = new Vue({
  router,
  store,
  render: h => h(App)
})

// 开发和测试环境中，开启vconsole调试工具
if (process.env.NODE_ENV === 'development') {
  // 在开发环境中，装载完vconsle后再调用amount，可以避免漏掉一些console信息
  import('vconsole/dist/vconsole.min.js').then(async module => {
    var VConsole = module.default
    // eslint-disable-next-line no-new
    new VConsole()
    rootVue.$mount('#app')
  })
} else {
  rootVue.$mount('#app')
}

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 特征检测库modernizr
import './utils/modernizr'
import fastClick from 'fastclick'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import 'normalize.css'

// 根据特性检测 判断是否需要hacks视口单位
let noNeedHacks = Modernizr.cssvwunit && Modernizr.cssvhunit && Modernizr.cssvmaxunit && Modernizr.cssvminunit
if (noNeedHacks) {
  viewportUnitsBuggyfill.init()
} else {
  // 修复老旧浏览器 Viewport Units的怪异问题 https://github.com/rodneyrehm/viewport-units-buggyfill
  // hacks参数模拟不支持的老旧浏览器的 Viewport Units
  viewportUnitsBuggyfill.init({
    hacks
  })
}

// fastClick 消除移动端click事件300ms延迟
fastClick.attach(document.body)

Vue.config.productionTip = false

let rootVue = new Vue({
  router,
  store,
  render: h => h(App)
})

// 开发和测试环境中，开启vconsole调试工具
if (process.env.NODE_ENV === 'development') {
  import('vconsole/dist/vconsole.min.js').then(async module => {
    var VConsole = module.default
    // eslint-disable-next-line
    new VConsole()
    rootVue.$mount('#app')
  })
} else {
  rootVue.$mount('#app')
}

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 特征检测库modernizr
import './utils/modernizr'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import plugins from './plugins'
import '@/service/cover'
import { userService } from '@/service/user'
// normalize.css的替代方案，更小，更面向现代浏览器（非IE），默认box-sizing: border-box
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
Vue.config.devtools = process.appConfig.devtools
// Vue.config.performance = true

// 注册全局vue插件
plugins.forEach(plugin => {
  Vue.use(plugin)
})

userService.init()

let rootVue = new Vue({
  router,
  store,
  render: h => h(App)
})

// 开启vconsole调试工具
if (process.appConfig.vconsole) {
  // 异步装载完vconsle后再调用amount，可以避免漏掉一些console信息
  import('vconsole/dist/vconsole.min.js').then(async module => {
    var VConsole = module.default
    // eslint-disable-next-line no-new
    new VConsole()
    rootVue.$mount('#app')
  })
} else {
  rootVue.$mount('#app')
}

// TODO: 思考OOP 与 tree-sharking，并优化，例如date-fns代替day.js
// TODO: 广告位，后台配置化弹框,引导，其他弹框
// TODO: 骨架屏
// TODO: 项目UML
// TODO: pre环境变量，配置
// TODO: vconsole插件开发
// TODO: 构建时图片压缩效率问题
// 如果代码不够清晰以至于需要一个注释，那么或许它应该被重写。
// 自描述/自解释型注释,代码存在任何巧妙和不显而易见的方法，那绝对需要注释。

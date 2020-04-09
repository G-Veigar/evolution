import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 特征检测库modernizr
import './utils/modernizr'
import plugins from './plugins'
import '@/service/sentry'
// import '@/service/cover'
import { userService } from '@/service/user'
// TAG: CSS reset
// normalize.css的替代方案，更小，更面向现代浏览器（非IE），默认box-sizing: border-box
import 'modern-normalize'
import './styles/base.css'

// 根据特性检测 判断是否需要hacks视口单位
const viewportSupport = Modernizr.cssvwunit && Modernizr.cssvhunit && Modernizr.cssvmaxunit && Modernizr.cssvminunit
if (!viewportSupport) {
  const p1 = import('viewport-units-buggyfill')
  const p2 = import('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
  Promise.all([p1, p2]).then(([m1, m2]) => {
    const viewportUnitsBuggyfill = m1.default
    const hacks = m2.default
    // 修复老旧浏览器（Mobile Safari） Viewport Units的怪异问题 https://github.com/rodneyrehm/viewport-units-buggyfill
    viewportUnitsBuggyfill.init({
      hacks
    })
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

const rootVue = new Vue({
  router,
  store,
  render: h => h(App)
})

// TAG: vconsole
if (process.appConfig.vconsole || window.location.search.includes(process.appConfig.vconsoleSecret)) {
  import('vconsole').then(module => {
    const VConsole = module.default
    // eslint-disable-next-line no-new
    new VConsole()
    rootVue.$mount('#app')
  })
} else {
  rootVue.$mount('#app')
}

// TODO: 广告位，后台配置化弹框,引导，其他弹框
// TODO: 骨架屏
// TODO: 项目UML
// TODO: pre环境变量，配置
// TODO: 构建时图片压缩效率问题
// TODO: sourceMap生产环境安全问题，若去掉如何整合sentry
// 如果代码不够清晰以至于需要一个注释，那么或许它应该被重写。
// 自描述/自解释型注释,代码存在任何巧妙和不显而易见的方法，那绝对需要注释。

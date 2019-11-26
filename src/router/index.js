import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes/index'
import { beforeEach } from './hooks'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 如果savedPosition，后退/前进可以返回到浏览器保存的问题位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 注册全局路由导航守卫
router.beforeEach(beforeEach)

export default router

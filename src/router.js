import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { setPageTitle } from './utils/browser'

Vue.use(Router)

console.log(Router.install)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'about'
      }
    },
    {
      path: '/scrollPass',
      name: 'scrollPass',
      component: () => import(/* webpackChunkName: "scrollPass" */ './views/scroll-pass.vue'),
      meta: {
        title: 'scrollPass'
      }
    },
    {
      path: '/ui',
      name: 'ui',
      component: () => import(/* webpackChunkName: "scrollPass" */ './views/ui.vue'),
      meta: {
        title: 'ui'
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  // 设置页面title
  setPageTitle(to.meta.title || 'evolution')
  next()
})

export default router

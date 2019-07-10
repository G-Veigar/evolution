import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { setPageTitle } from './utils/browser'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
      component: () => import('./views/ui.vue'),
      meta: {
        title: 'ui'
      }
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('./views/css.vue'),
      meta: {
        title: 'css'
      }
    },
    {
      path: '/fast',
      name: 'fast',
      component: () => import('./views/fast.vue'),
      meta: {
        title: 'fast'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/list.vue'),
      meta: {
        title: 'list'
      }
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: () => import('./views/lazy.vue'),
      meta: {
        title: 'lazy'
      }
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('./views/security.vue'),
      meta: {
        title: 'security'
      }
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./views/grid.vue'),
      meta: {
        title: 'grid'
      }
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/sign.vue'),
      meta: {
        title: 'sign'
      }
    },
    {
      path: '/promise',
      name: 'promise',
      component: () => import('./views/promise.vue'),
      meta: {
        title: 'promise'
      }
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('./views/class.vue'),
      meta: {
        title: 'class'
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

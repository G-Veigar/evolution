import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { setPageTitle } from './utils/browser'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果savedPosition，后退/前进可以返回到浏览器保存的问题位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
      component: () => import('./views/css/index.vue'),
      meta: {
        title: 'css'
      }
    },
    {
      path: '/css/figure',
      name: 'cssFigure',
      component: () => import('./views/css/figure.vue'),
      meta: {
        title: 'css画图形'
      }
    },
    {
      path: '/css/center',
      name: 'cssCenter',
      component: () => import('./views/css/center.vue'),
      meta: {
        title: 'css居中'
      }
    },
    {
      path: '/js',
      name: 'js',
      component: () => import('./views/js/index.vue'),
      meta: {
        title: 'js'
      }
    },
    {
      path: '/js/clone',
      name: 'jsClone',
      component: () => import('./views/js/clone.vue'),
      meta: {
        title: 'js深拷贝'
      }
    },
    {
      path: '/js/proto',
      name: 'jsProto',
      component: () => import('./views/js/proto.vue'),
      meta: {
        title: '原型与面向对象'
      }
    },
    {
      path: '/js/algorithm',
      name: 'jsAlgorithm',
      component: () => import('./views/js/algorithm.vue'),
      meta: {
        title: '算法'
      }
    },
    {
      path: '/js/class',
      name: 'jsClass',
      component: () => import(/* webpackChunkName: "es6class" */ './views/js/class.vue'),
      meta: {
        title: 'class'
      }
    },
    {
      path: '/js/throttle',
      name: 'jsThrottle',
      component: () => import(/* webpackChunkName: "es6class" */ './views/js/throttle.vue'),
      meta: {
        title: 'throttle'
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

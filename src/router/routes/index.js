let routeConfigs = require.context('.', false, /\.js$/)

let routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout-main" */ '@/views/layouts/main/index'),
    children: [
      {
        path: '',
        name: 'apply',
        component: () => import('@/views/pages/apply/index'),
        meta: {
          title: '借款',
          noAuth: true
        }
      },
      {
        path: 'repay',
        name: 'repay',
        component: () => import('@/views/pages/repay/index'),
        meta: {
          title: '我要还款',
          noAuth: true
        }
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('@/views/pages/mine/index'),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/pages/video.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/pages/error/404'),
    meta: {
      title: '我的',
      noAuth: true
    }
  }
]

routeConfigs.keys().forEach(routeItem => {
  let routeConfigItem = routeConfigs(routeItem).default
  // 不处理入口文件index.js
  if (routeItem !== './index.js') {
    routes = routes.concat(routeConfigItem)
  }
})

export default routes

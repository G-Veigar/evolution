let routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/layouts/main/index'),
    children: [
      {
        path: '',
        name: 'apply',
        component: () => import('../views/pages/apply/index'),
        meta: {
          title: '借款',
          noNeedLogin: true
        }
      },
      {
        path: 'repay',
        name: 'repay',
        component: () => import('../views/pages/repay/index'),
        meta: {
          title: '我要还款',
          noNeedLogin: true
        }
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/pages/mine/index'),
        meta: {
          title: '我的',
          noNeedLogin: true
        }
      }
    ]
  }
]

export default routes

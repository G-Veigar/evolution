let route = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/account/login'),
    meta: {
      title: '登录',
      noNeedLogin: true
    }
  }
]

export default route

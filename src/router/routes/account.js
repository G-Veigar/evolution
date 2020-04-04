const route = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/account/login'),
    meta: {
      title: '登录',
      noAuth: true
    }
  },
  {
    path: '/pass-login',
    name: 'passLogin',
    component: () => import('@/views/pages/account/pass-login'),
    meta: {
      title: '密码登录',
      noAuth: true
    }
  },
  {
    path: '/reset-pass',
    name: 'resetPass',
    component: () => import('@/views/pages/account/reset-pass'),
    meta: {
      title: '密码登录',
      noAuth: true
    }
  }
]

export default route

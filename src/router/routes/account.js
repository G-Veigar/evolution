let route = [
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
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/account/register'),
    meta: {
      title: '注册',
      noAuth: true
    }
  }
]

export default route

const route = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/pages/test'),
    meta: {
      title: 'test',
      noAuth: true
    }
  }
]

export default route

import { setPageTitle } from '../utils/browser'

// TODO: 基于发布订阅模式，实现对路由钩子函数的事件处理
export function beforeEach (to, from, next) {
  // 设置页面title
  setPageTitle(to.meta.title || 'evolution')
  next()
}

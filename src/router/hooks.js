import { setPageTitle } from '../utils/browser'

export function beforeEach (to, from, next) {
  // 设置页面title
  setPageTitle(to.meta.title || 'evolution')
  next()
}

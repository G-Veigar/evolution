import { setPageTitle } from '../utils/browser'
import event from '$util/event'

export function beforeEach (to, from, next) {
  // 设置页面title
  setPageTitle(to.meta.title || 'evolution')
  event.emit('beforeEachRoute', { to, from, next })
  next()
}

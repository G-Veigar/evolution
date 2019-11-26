import { setPageTitle } from '../utils/browser'
import event from '$util/event'
import { userService } from '@/service/user'

export function beforeEach (to, from, next) {
  // 检查页面的访问权限
  if (!checkPageAuth(to.meta.noAuth)) {
    next('/login')
    return
  }
  // 设置页面title
  setPageTitle(to.meta.title || 'evolution')
  // 发送beforeEachRoute事件，方便有些业务逻辑在运行时动态的添加钩子
  event.emit('beforeEachRoute', { to, from, next })
  next()
}

// 检查当前用户有无此页面的访问权限
function checkPageAuth (noAuth) {
  // 当前页面不需要权限
  if (noAuth) return true
  return userService.loginStatus === 1
}

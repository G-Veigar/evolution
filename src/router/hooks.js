import { setPageTitle } from '../utils/browser'
import event from '$util/event'
import { userService } from '@/service/user'
import once from 'lodash/once'

export function beforeEach (to, from, next) {
  // next只执行一次，防止beforeEachRoute回调重复调用next
  next = once(next)
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
  // 页面配置不需要权限，或者在Selenium,puppeteer等自动化驱动程序中不需要权限
  if (noAuth || navigator.webdriver) return true
  return +userService.loginStatus === 1
}

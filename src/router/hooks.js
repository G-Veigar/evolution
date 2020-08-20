/*
 * @Author: 高歌
 * @Date: 2020-05-13 01:08:00
 * @LastEditTime: 2020-08-13 19:38:57
 * @LastEditors: 高歌
 * @FilePath: /evolution/src/router/hooks.js
 * @Description:
 */
import { setPageTitle } from '../service/platform'
import event from '$util/event'
import { userService } from '@/service/user'
import { holdRouteHook } from '../plugins/hold-route.js'

export function beforeEach (to, from, next) {
  console.log('beforeEach')
  // 如果需要hole路由
  const needHold = holdRouteHook(from)
  if (needHold) {
    next(false)
    return
  }
  // 检查页面的访问权限
  if (!checkPageAuth(to)) {
    next('/login')
    return
  }
  // 设置页面title
  setPageTitle(to.meta.title || 'evolution')
  // 发送beforeEachRoute事件，方便有些业务逻辑在运行时动态的添加钩子
  event.emit('beforeEachRouteConfirm', { to, from })
  next()
}

// 检查当前用户有无此页面的访问权限
function checkPageAuth (toPage) {
  // noAuth 路由配置中 表示不需要登录态
  const noAuth = toPage.meta.noAuth
  // 不需要登录态 或者在Selenium,puppeteer等自动化驱动程序中不需要权限
  if (noAuth || navigator.webdriver) return true
  return +userService.loginStatus === 1
}

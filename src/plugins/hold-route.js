/*
 * @Author: 高歌
 * @Date: 2020-07-05 20:49:31
 * @LastEditTime: 2020-08-13 21:09:54
 * @LastEditors: 高歌
 * @FilePath: /evolution/src/plugins/hold-route.js
 * @Description: hold住路由跳转，转而执行其他操作
 */
import router from '@/router'

const holdMap = {}

let index = 0

const next = (tag) => {
  if (tag === false) return
  index++
}

// 路由钩子，返回是否需要hold路由
const holdRouteHook = (from) => {
  let needHold
  const fromHoldList = holdMap[from.name]
  if (!fromHoldList) {
    needHold = false
    return needHold
  }
  const holdLength = fromHoldList.length
  index = 0
  for (let i = 0; (i < holdLength) && (index === i); i++) {
    fromHoldList[i](next)
  }
  // 如果index与holdLength不相等，说有callback调用了next(false),也就是需要hold
  needHold = (index !== holdLength)
  // 如果不需要hold，说明会跳转，清空当前路由的hold数组，不需要手动解除hole，防止因为忘记解除hold导致的内存泄漏
  if (!needHold) {
    delete holdMap[from.name]
  }
  return needHold
}

// example:
// this.$holdRoute(next => {
//   if (this.isShow) {
//     this.isShow = false
//     next(false)
//   } else {
//     next()
//   }
// })
const holdRoute = callBack => {
  // 依赖所有的路由要配置name
  const currentRouteName = router.currentRoute.name
  if (holdMap[currentRouteName]) {
    holdMap[currentRouteName].push(callBack)
  } else {
    holdMap[currentRouteName] = [callBack]
  }
}

const holdRoutePlugin = {
  install (Vue) {
    Vue.prototype.$holdRoute = holdRoute
    Vue.holdRoute = holdRoute
  }
}

export default holdRoutePlugin
export { holdRouteHook }

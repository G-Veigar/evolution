// 事件模块
// TAG 设计模式 - 发布/订阅
import { aop } from './aop'

let event

(function () {
  const list = {}
  event = {
    // 订阅
    on (eventName, cb) {
      if (!list[eventName]) {
        list[eventName] = []
      }
      list[eventName].push(cb)
    },
    // 订阅一次
    once (eventName, cb) {
      const onceCb = aop(cb, {
        after () {
          event.off(eventName, onceCb)
        }
      })
      event.on(eventName, onceCb)
    },
    // 发布/通知
    emit (eventName, payload) {
      const cbs = list[eventName]
      cbs && cbs.forEach(cb => {
        cb(payload)
      })
    },
    // 移除
    off (eventName, cb) {
      const cbs = list[eventName]
      if (!cb) {
        list[eventName] = []
      } else {
        cbs.forEach((thisCb, i) => {
          if (thisCb === cb) {
            cbs.splice(i, 1)
          }
        })
      }
    }
  }
})()

export default event

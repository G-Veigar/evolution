// 一个基于发布订阅模式的事件模块
import aop from './aop'

let event

(function () {
  let list = {}
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
      let onceCb = aop(cb, {
        after () {
          event.off(eventName, onceCb)
        }
      })
      event.on(eventName, onceCb)
    },
    // 发布/通知
    emit (eventName, payload) {
      let cbs = list[eventName]
      cbs && cbs.forEach(cb => {
        cb(payload)
      })
    },
    // 移除
    off (eventName, cb) {
      let cbs = list[eventName]
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

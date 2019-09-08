// 一个基于发布订阅模式的事件模块
// TODO: 实现once, has功能
let event

(function () {
  let list = {}
  event = {
    on (eventName, cb) {
      if (!list[eventName]) {
        list[eventName] = []
      }
      list[eventName].push(cb)
    },
    emit (eventName, payload) {
      let cbs = list[eventName]
      cbs && cbs.forEach(cb => {
        cb(payload)
      })
    },
    remove (eventName, cb) {
      let cbs = list[eventName]
      if (!cb) {
        list[eventName] = []
      // cbs = []
      } else {
        cbs.forEach((thisCb, i) => {
          if (thisCb === cb) {
            cbs.splice(i, 1)
          }
        })
      }
    },
    getList () {
      return list
    }
  }
})()

export default event

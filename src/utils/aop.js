import { curry } from 'ramda'
import { Loading } from './ui'
import Vue from 'vue'
import { Dialog } from 'vant'

Vue.use(Dialog)

/**
 * AOP（面向切片编程）功能函数
 *
 * @param {*} fun 目标函数
 * @param {*} options 选项对象，可以包含的属性为before或者after
 */
function aop (options, fun) {
  const { before, after } = options
  let nextTag
  const next = (canNext = true) => { nextTag = canNext }
  return function (...args) {
    // 初始化
    nextTag = true
    before && before.call(this, next, args)
    // 如果before中调用了next(false)则不再往下执行
    if (!nextTag) return
    const res = fun.apply(this, args)
    after && after.call(this, res)
    return res
  }
}

// Aop函数的异步版
function aopAsync (options, fun) {
  const { before, after } = options
  let nextTag
  const next = (canNext = true) => { nextTag = canNext }
  return async function (...args) {
    // 初始化
    nextTag = true
    if (before) {
      await before.call(this, next, args)
    }
    if (!nextTag) return
    const res = await fun.apply(this, args)
    after && after.call(this, res)
    return res
  }
}

const withLoading = (msg, fun) => {
  return curry(aopAsync)({
    before () {
      Loading(fun ? msg : '加载中...')
    },
    after () {
      Loading.close()
    }
  })(fun || msg)
}

const confirmBefore = (msg, fun) => {
  return curry(aopAsync)({
    before (next) {
      return Dialog.confirm({
        title: '提示',
        message: msg
      }).then(() => {
        next()
      }).catch(() => {
        next(false)
      })
    }
  })(fun || msg)
}

export {
  aop,
  aopAsync,
  withLoading,
  confirmBefore
}

/**
 * AOP（面向切片编程）功能函数
 *
 * @param {*} fun 目标函数
 * @param {*} options 选项对象，可以包含的属性为before或者after
 */
export const aop = (fun, options) => {
  const { before, after } = options
  return function (...args) {
    before && before.call(this, args)
    fun.apply(this, args)
    after && after.call(this, args)
  }
}

/**
 * 延迟函数
 *
 * @param {*} ms 延迟的毫秒数
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

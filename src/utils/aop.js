/**
 * AOP（面向切片编程）功能函数
 *
 * @param {*} fun 目标函数
 * @param {*} options 选项对象，可以包含的属性为before或者after
 */
function aop (fun, options) {
  const { before, after } = options
  return function () {
    before && before.call(this, arguments)
    fun.apply(this, arguments)
    after && after.call(this, arguments)
  }
}

export default aop

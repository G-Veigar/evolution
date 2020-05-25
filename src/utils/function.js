/**
 * AOP（面向切片编程）功能函数
 *
 * @param {*} fun 目标函数
 * @param {*} options 选项对象，可以包含的属性为before或者after
 */
function aop (fun, options) {
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
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 缓存函数，返回一个新函数，如果输入的参数一样，直接返回执行结果
 *
 * @param {*} fun 被缓存函数（必须是纯函数）
 */
function cache (fun) {
  if (!cache._cacheMap.has(fun)) {
    cache._cacheMap.set(fun, {})
  }
  return function (...args) {
    const cacheData = cache._cacheMap.get(fun)
    const key = JSON.stringify(args)
    let res = cacheData[key]
    if (res) {
      return res
    } else {
      res = fun.apply(this, args)
      cacheData[key] = res
      return res
    }
  }
}

cache._cacheMap = new Map()

export {
  aop,
  sleep,
  cache
}

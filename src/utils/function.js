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
  // 使用WeakMap 防止内存溢出
  const _cacheMap = new Map()
  return function (...args) {
    const argsKey = JSON.stringify(args)
    if (_cacheMap.has(argsKey)) {
      return _cacheMap.get(argsKey)
    }
    const res = fun.apply(this, args)
    _cacheMap.set(argsKey, res)
    return res
  }
}

function lockAsync (asyncFun) {
  const _cacheMap = new Map()
  return function (...args) {
    if (_cacheMap.has(asyncFun)) {
      return Promise.reject(new Error('runing'))
    } else {
      _cacheMap.set(asyncFun, true)
    }
    return asyncFun.apply(this, args).finally(() => {
      _cacheMap.delete(asyncFun)
    })
  }
}

// 异步重试函数
function retry (fun, tryNum) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      let callTime = 0
      const run = fun.bind(this, ...args)
      const _r = () => {
        callTime++
        run().then(res => {
          resolve(res)
        }).catch(e => {
          if (callTime < tryNum) {
            _r()
          } else {
            reject(e)
          }
        })
      }
      _r()
    })
  }
}

export {
  sleep,
  cache,
  lockAsync,
  retry
}

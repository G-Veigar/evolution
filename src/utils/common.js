/**
 * 判断是否是空对象
 */
export function isEmptyObj (obj) {
  for (const item in obj) {
    return false
  }
  return true
}

/**
 * 判断是否是为promise
 */
export function isPromise (obj) {
  return !!obj && (Object.prototype.toString.call(obj) === '[object Promise]')
}

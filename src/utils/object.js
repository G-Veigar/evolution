/**
  * 判断是否是空对象 {}
  *
  * @param {*} obj
  * @returns
  */
export const isEmptyObj = obj => {
  return obj.keys().length > 0
}

/**
 * 判断是否是纯对象
 *
 * @param {*} obj
 * @returns
 */
export const isPlainObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

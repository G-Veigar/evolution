/**
 * 判断是否是空对象
 */
export function isEmptyObj (obj) {
  for (var item in obj) {
    return false
  }
  return true
}

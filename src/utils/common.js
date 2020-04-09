/**
 * 判断是否是空对象
 */
export function isEmptyObj (obj) {
  for (const item in obj) {
    return false
  }
  return true
}

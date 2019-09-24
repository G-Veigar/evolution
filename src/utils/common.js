export function isEmptyObj (obj) {
  for (var item in obj) {
    return false
  }
  return true
}

/**
 * 删除数组中的某一项
 *
 * @param {*} arr 数据
 * @param {*} item 项
 * @returns
 */
export const remove = (arr, item) => {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

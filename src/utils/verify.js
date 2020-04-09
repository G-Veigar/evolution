// /*
//  * 表单校验
//  * @Author: gaoge
//  * @Date: 2020-04-05 23:58:18
//  * @Last Modified by: gaoge
//  * @Last Modified time: 2020-04-06 00:24:42
//  */

// // TAG 设计模式 - 策略模式
// var strategies = {
//   // errorMsg参数，提升了适用性
//   isNonEmpty (value, errorMsg) { // 不为空
//     if (value === '') {
//       // 返回字符串true  错误信息
//       return errorMsg
//     }
//   },
//   minLength (value, length, errorMsg) { // 限制最小长度
//     if (value.length < length) {
//       return errorMsg
//     }
//   },
//   maxLength (value, length, errorMsg) {
//     if (value.length > length) {
//       return errorMsg
//     }
//   },
//   isMobile (value, errorMsg) {
//     if (!/^1[1|5|8|7|4|3][0-9]{9}$/.test(value)) { // 电话号码校验
//       return errorMsg
//     }
//   }
// }

// function verify (strategy, ...params) {
//   const res = strategies[strategy](...params)
// }

// export default verify

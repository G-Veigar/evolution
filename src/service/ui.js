// import { Toast } from 'mand-mobile'

// /**
//  * Toast提示
//  * @param {any} msg Toast内容
//  * @param {number} duration 持续时间
//  * @param {HTMLElement} parentNode 持续时间
//  * @returns {number} Toast持续时间
//  */
// const uiToast = (msg, duration, parentNode) => {
//   // 持续时间：2.5 + 每10个字符1秒
//   duration = duration || (Math.floor(String(msg).length / 10) + 2.5) * 1000
//   const options = {
//     content: String(msg),
//     duration
//   }
//   parentNode && (options.parentNode = parentNode)
//   Toast(options)
// }

// /**
//  * Loading加载框
//  * @param {any} [title=加载中] Loading内容
//  * @param {number} duration 持续时间（毫秒数）
//  */
// // const uiLoading = function (title = '加载中', duration) {
// //   Indicator.open({
// //     text: title,
// //     spinnerType: 'snake'
// //   })
// //   if (duration) {
// //     setTimeout(() => {
// //       Indicator.close()
// //     }, duration)
// //   }
// // }

// // uiLoading.close = Indicator.close

// /**
//  * MessageBox确认框
//  * @param {(string|object)} params - 参数
//  * @param {string} [params.title] - 提示标题
//  * @param {string} params.message - 提示内容
//  * @param {string} [params.showCancel=false] - 是否展示取消按钮
//  * @param {string} [params.cancelText=取消] - 取消按钮文字
//  * @param {string} [params.confirmText=确定] - 确定按钮文字
//  * @returns {promise} promise对象 点确定为 true, 点取消为 false
//  */
// // const Dialog = params => {
// //   let obj = {}
// //   if (typeof params === 'string') {
// //     obj.message = formatMessage(params)
// //     obj.title = ''
// //   } else {
// //     obj.title = params.title || ''
// //     obj.message = formatMessage(params.message)
// //     obj.showCancelButton = params.cancelText || params.showCancel
// //     obj.cancelButtonText = params.cancelText || '取消'
// //     obj.confirmButtonText = params.confirmText || '确定'
// //   }
// //   let res = new Promise(async function (resolve, reject) {
// //     let data = await MessageBox(obj)
// //     resolve(data === 'confirm')
// //   })
// //   return res
// // }

// // Dialog.close = () => {
// //   MessageBox.close(false)
// // }

// // const Success = (msg = '操作成功') => {
// //   return new Promise(async (resolve, reject) => {
// //     let res = await MessageBox({
// //       title: '提示',
// //       message: msg,
// //       showCancelButton: false
// //     })
// //     resolve(res === 'confirm')
// //   })
// // }

// // uiLoading.close = () => {
// //   Indicator.close()
// // }

// // 根据逗号格式换行
// // function formatMessage (msg) {
// //   return String(msg).replace(/[，,]/, '<br/>')
// // }

// const Ui = {
//   Toast: uiToast
//   // Loading: uiLoading,
//   // Dialog: Dialog,
//   // Success: Success
// }

// export default Ui

// class Middleware {
//   constructor (ctx, cb) {
//     this.ctx = ctx // 上下文对象
//     this.cb = cb // 最后要执行的操作
//     this.middles = [] // 保存中间件
//   }

//   use (middleFun) {
//     this.middles.push(middleFun)
//   }

//   run () {
//     let index = 0
//     const next = () => {
//       index++
//     }
//     for (let i = index; i < this.middles.length; i++) {
//       const middleFun = this.middles[i]
//       middleFun(this.ctx, next)
//       // 如果中间件调用了next，index会增加
//       if (index === i) break
//     }
//     (index === this.middles.length) && this.cb(this.ctx)
//   }
// }

// class Middleware2 {
//   constructor (ctx, cb) {
//     this.ctx = ctx // 上下文对象
//     this.cb = cb // 最后要执行的操作
//     this.middles = [] // 保存中间件
//   }

//   use (middleFun) {
//     this.middles.push(middleFun)
//   }

//   run () {
//     const gen = function * () {
//       for (var i = 0; i < this.middles.length; i++) {
//         const middleFunThunk = thunk(this.middles[i])
//         yield middleFunThunk(this.ctx)
//       }
//       (i === this.middles.length) && this.cb(this.ctx)
//     }
//     const g = gen.call(this)
//     const next = () => {
//       var result = g.next()
//       if (result.done) return
//       result.value(next)
//     }
//     next()
//   }
// }

// class Middleware3 {
//   constructor (ctx, cb) {
//     this.ctx = ctx // 上下文对象
//     this.cb = cb // 最后要执行的操作
//     this.middles = [] // 保存中间件
//   }

//   use (middleFun) {
//     this.middles.push(middleFun)
//   }

//   run () {

//   }
// }

// const thunk = function (fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback)
//     }
//   }
// }

// // export default Middleware

// // 使用例子
// // const router = new Middleware2({
// //   page: '/a'
// // }, ctx => {
// //   console.log('jump: ' + ctx.page)
// // })

// // router.use((ctx, next) => {
// //   // 伪代码：if(user.isNotLogin)
// //   ctx.page = '/b'
// //   console.log('修改跳转页面到: /b')
// //   next()
// // })

// // router.use((ctx, next) => {
// //   ctx.page = '/c'
// //   console.log('即将跳转到页面：/c')
// //   next()
// // })

// // router.run()

// // 洋葱模型例子
// const router = new Middleware2({
//   page: '/a'
// }, ctx => {
//   console.log('jump: ' + ctx.page)
// })

// router.use((ctx, next) => {
//   // 伪代码：if(user.isNotLogin)
//   ctx.page = '/b'
//   console.log('修改跳转页面到: /b')
//   next().then(() => {
//     console.log('Middleware1 end')
//   })
// })

// router.use((ctx, next) => {
//   ctx.page = '/c'
//   console.log('即将跳转到页面：/c')
//   next().then(() => {
//     console.log('Middleware2 end')
//   })
// })

// router.run()

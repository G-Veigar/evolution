class Middleware {
  constructor (ctx, cb) {
    this.ctx = ctx // 上下文对象
    this.cb = cb // 最后要执行的操作
    this.middles = [] // 保存中间件
  }

  use (middleFun) {
    this.middles.push(middleFun)
  }

  run () {
    let index = 0
    const next = () => {
      index++
    }
    for (let i = index; i < this.middles.length; i++) {
      const middleFun = this.middles[i]
      middleFun(this.ctx, next)
      // 如果中间件调用了next，index会增加
      if (index === i) break
    }
    (index === this.middles.length) && this.cb(this.ctx)
  }
}

export default Middleware

// 使用例子
// const router = new Middleware({
//   page: '/'
// }, ctx => {
//   console.log('jump: ', ctx.page)
// })

// router.use((ctx, next) => {
//   // 伪代码：if(user.isNotLogin)
//   console.log('修改跳转页面到: /logio')
//   ctx.page = '/login'
//   next()
// })

// router.use((ctx, next) => {
//   console.log('即将跳转到页面：' + ctx.page)
//   next()
// })

// router.run()

/*
 * @Author: 高歌
 * @Date: 2020-05-13 01:08:00
 * @LastEditTime: 2020-10-10 14:15:11
 * @LastEditors: 高歌
 * @FilePath: /evolution/src/utils/middleware.js
 * @Description: 洋葱型中间件
 */
function middleware (fun) {
  // 中间件数组
  const middles = []
  // 中间件执行标识位
  let index = 0
  // 执行上下文
  let ctx = null
  // next函数
  const next = async (goNext = true) => {
    if (!goNext) {
      return
    }
    const current = middles[index++]
    if (current) {
      await current(ctx, next)
    }
  }
  const res = async (...options) => {
    index = 0
    ctx = options
    await next()
    if (index === middles.length + 1) {
      fun(...ctx)
    }
  }
  res.use = ware => {
    middles.push(ware)
  }
  return res
}

// export default middleware

function say (text) {
  console.log(text)
}

const mwSay = middleware(say)

mwSay.use(async (ctx, next) => {
  console.log('a')
  ctx[0] = 'hehe'
  await next()
  console.log('a end')
})

mwSay.use(async (ctx, next) => {
  console.log('b')
  await next()
  console.log('b end')
})

mwSay('hello')

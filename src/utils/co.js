// function co (gen) {
//   return new Promise((resolve, reject) => {

//   })
//   const res = gen.next()
//   if(res.done)
// }

// function run(gen) {

// }

// function * gen () {
//   console.log('gen start')
//   const res1 = yield new Promise((resolve, reject) => {
//     console.log('Promise1 start')
//     setTimeout(() => {
//       resolve(2)
//       console.log('Promise1 end')
//     }, 2000)
//   })
//   const res2 = yield new Promise((resolve, reject) => {
//     console.log('Promise2 start')
//     setTimeout(() => {
//       resolve(5)
//       console.log('Promise2 end')
//     }, 2000)
//   })
//   console.log('gen end', res1 + res2)
// }

// co(gen).then(data => {
//   console.log('co end', data)
// })

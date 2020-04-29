function ts (task) {
  let g
  if (Array.isArray(task)) {
    const length = task.length
    const gen = function * () {
      for (let i = 0; i < length; i++) {
        const thisPiece = task[i]
        yield thisPiece()
      }
    }
    g = gen()
  } else if (Object.prototype.toString.call(task) === '[object GeneratorFunction]') {
    g = task()
  }
  let res
  const next = () => {
    const start = Date.now()
    do {
      res = g.next()
    } while (!res.done && (Date.now() - start < 30))
    if (!res.done) {
      setTimeout(next, 0)
    }
  }
  next()
}

let time = 0
const timer = setInterval(() => {
  console.log('其他任务' + time++)
  if (time === 5) {
    clearInterval(timer)
  }
}, 1000)

// function log1 () {
//   let sum = 0
//   for (let i = 0; i < 10000000000; i++) {
//     sum += i
//   }
//   console.log('done', sum)
// }

function * log () {
  let sum = 0
  for (let i = 0; i < 100000000; i++) {
    yield sum += i
  }
  console.log('done', sum)
}

ts(log)

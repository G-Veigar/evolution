function co (gen) {
  const i = gen()
  i.next()
  let res = i.next()
  while (!res.done) {
    res.value.then(data => {
      res = i.next(data)
    })
  }
  return res.value
}

function * gen () {
  let time
  time = yield sleep(1000)
  console.log('time', time)
  time = yield sleep(3000)
  console.log('time', time)
  time = yield sleep(7000)
  console.log('time', time)
}

function sleep (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

co(gen)

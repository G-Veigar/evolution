// 重写覆盖了部分原生函数

let timerList = {
  timeout: [],
  interval: []
}

const setTimeout = window.setTimeout
const setInterval = window.setTimeout

function setTimeout2 () {
  let timer = setTimeout.apply(this, arguments)
  timerList.timeout.push(timer)
  return timer
}

function setInterval2 () {
  let timer = setInterval.apply(this, arguments)
  timerList.interval.push(timer)
  return timer
}

window.setTimeout = setTimeout2

window.setInterval = setInterval2

// 重写覆盖了部分原生函数

const timerList = {
  timeout: [],
  interval: []
}

const setTimeout = window.setTimeout
const setInterval = window.setTimeout

function setTimeout2 () {
  const timer = setTimeout.apply(this, arguments)
  timerList.timeout.push(timer)
  return timer
}

function setInterval2 () {
  const timer = setInterval.apply(this, arguments)
  timerList.interval.push(timer)
  return timer
}

window.setTimeout = setTimeout2

window.setInterval = setInterval2

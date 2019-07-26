<template>
  <div class="throttle">
    <h2>Debounce</h2>
    <h3>Input</h3>
    <input type="text" @input="handleInput">
    <h3>Input with Debounce</h3>
    <input type="text" @input="handleInputWithDebounce">
    <h2>throttle</h2>
  </div>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers'
// 节流函数，一段时间执行一次
const throttle = (fun, time) => {
  let datePre
  return function (args) {
    let now = +new Date()
    if (!datePre || (now - datePre > time)) {
      fun.call(this, args)
      datePre = now
    }
  }
}

// 防抖函数，一段时间后才执行
const debounce = (fun, time) => {
  let timer
  return function (args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fun.call(this, args)
    }, time)
  }
}
const log = (text) => {
  console.log(text)
}

const debounceLog = debounce(log, 500)

export default {
  methods: {
    handleInput ($e) {
      log($e.target.value)
    },
    handleInputWithDebounce ($e) {
      debounceLog($e.target.value)
    }
  },
  mounted () {
    let resize = () => {
      console.log('resize')
    }
    let throttleResize = throttle(resize, 1000)
    window.addEventListener('resize', throttleResize)
  }
}
</script>

<style lang="postcss" scoped>
input {
  border: 1px solid #aaa;
}
</style>

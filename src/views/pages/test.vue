<!--
 * @Author: 高歌
 * @Date: 2020-05-13 01:08:00
 * @LastEditTime: 2020-08-15 11:06:16
 * @LastEditors: 高歌
 * @FilePath: /evolution/src/views/pages/test.vue
 * @Description:
-->
<template>
  <div class="test-page">
    <div class="box"></div>
    <h1>fixed</h1>
    <button @click="doSomething">doing</button>
    <button @click="doSomething2">doing2</button>
  </div>
</template>

<script>
import { withLoading, confirmBefore } from '../../utils/aop'

export default {
  data () {
    return {
    }
  },
  methods: {
    doSomething: withLoading(() => {
      return new Promise((resolve, reject) => {
        console.log('f start')
        setTimeout(() => {
          console.log('f end')
          resolve(true)
        }, 3000)
      })
    }),
    doSomething2: confirmBefore('确认支付？', () => {
      console.log('do pay')
    })
  }
}
</script>

<style lang="postcss">
.test-page {
  position: absolute;
  overflow: hidden;
  padding-top:80px;
  margin-top: 70px;
  /* transform: translateY(50px); */
  /* will-change: transform; */
  border: 6px solid blue;
}
.box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  background: rgba(0,0,0,0.5);
}
</style>

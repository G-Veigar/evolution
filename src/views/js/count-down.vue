<template>
  <div>
    <div class="timer">time：{{timer}}</div>
    <button class="run" @click="run">run</button>
    <button class="add" @click="add">add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: ''
    }
  },
  methods: {
    run () {
      let that = this
      this.timer = new Date()
      // setInterval(() => {
      //   this.timer = new Date(this.timer.getTime() + 1000)
      // }, 1000)

      let fun = () => {
        this.timer = new Date(this.timer.getTime() + 1000)
        setTimeout(fun, 1000)
      }
      setTimeout(fun, 1000)

      setTimeout(function a () {
        that.timer = new Date(this.timer.getTime() + 1000)
        setTimeout(a, 1000)
      }, 1000)
    },
    add () {
      let i = 6000000000
      while (i > 0) {
        i--
      }
    }
  }
}
</script>

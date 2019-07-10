<template>
  <div class="fast">
    {{timer}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: 0
    }
  },
  mounted () {
    let timerId = requestAnimationFrame(() => {
      this.timer++
    })
    cancelAnimationFrame(timerId)
  }
}
</script>

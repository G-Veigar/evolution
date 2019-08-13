<template>
  <div class="fast">
    {{timer}}
    <my-button text="hehe"></my-button>
  </div>
</template>

<script>
import myButton from '../components/common/button.vue'

export default {
  components: { myButton },
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

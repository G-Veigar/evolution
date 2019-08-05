<template>
  <div class="async">
    <button ref="btn" @click="handleClick">console</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {

    }
  },
  mounted () {
    let btn = this.$refs.btn

    btn.addEventListener('click', () => {
      console.log('clicked1')
      Promise.resolve().then(() => console.log('clicked promise1'))
      setTimeout(() => console.log('clicked timeout1'), 0)
    })

    btn.addEventListener('click', () => {
      console.log('clicked2')
      Promise.resolve().then(() => console.log('clicked promise2'))
      setTimeout(() => console.log('clicked timeout2'), 0)
    })

    btn.click()

    // console.log('clicked1')
    // Promise.resolve().then(() => console.log('clicked promise1'))
    // console.log('clicked2')
    // Promise.resolve().then(() => console.log('clicked promise2'))

    /** clicked1
     *  clicked2
     *  clicked promise1
     *  clicked promise2
     *  clicked timeout1
     *  clicked timeout2
     */
  }
}
</script>

<style>

</style>

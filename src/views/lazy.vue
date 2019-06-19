<template>
  <div class="lazy">
    <button @click="toggle">toggle</button>
    <p>点击按钮才会加载组件哦</p>
    <lazy-comp v-if="show"></lazy-comp>
  </div>
</template>

<script>
const lazyComp = () => import(/* webpackChunkName: "lazycomp" */ '../components/business/lazycomp')

export default {
  components: { lazyComp },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

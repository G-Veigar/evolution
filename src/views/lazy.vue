<template>
  <div class="lazy">
    <button @click="toggle">toggle</button>
    <p>点击按钮才会加载组件哦</p>
    <lazy-comp v-if="show"></lazy-comp>
    <hr>
    <button @click="toggle2">toggle2</button>
    <p>组件已经预加载了</p>
    <lazy-comp2 v-if="show2"></lazy-comp2>
  </div>
</template>

<script>
const lazyComp = () => import(/* webpackChunkName: "lazycomp" */ '../components/business/lazycomp')
const lazyComp2 = () => import(/* webpackChunkName: "lazycomp2", webpackPreload: true */ '../components/business/lazycomp2')

export default {
  components: { lazyComp, lazyComp2 },
  data () {
    return {
      show: false,
      show2: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    toggle2 () {
      this.show2 = !this.show2
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>

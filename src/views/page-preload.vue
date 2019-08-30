<template>
  <div class="page-preload">
    路由预加载
    <button @click="goNext">下个页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    goNext () {
      import(/* webpackPrefetch: true */ './page-preload-page')
      this.$router.push('/pagePreloadPage')
    }
  }
}
</script>

<style lang="postcss" scoped>
button {
  background-color: #996611;
  color: #fff;
}
</style>

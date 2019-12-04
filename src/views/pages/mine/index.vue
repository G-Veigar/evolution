<template>
  <div class="mine">
    <h1>{{name}}</h1>
    <p>{{age}}</p>
    <p>{{job}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'hehehe',
      age: 0,
      job: '无'
    }
  },
  created () {
    this.age = 27
  },
  mounted () {
    this.job = '前端工程师'
  }
}
</script>

<style lang="postcss" scoped>
.mine {

}
</style>

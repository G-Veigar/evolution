<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{date}}</div>
    <div>{{date2}}</div>
    <my-test></my-test>
  </div>
</template>

<script>
import myTest from '../components/test'

export default {
  components: { myTest },
  data () {
    return {
      date: this.$route.params.date || '无',
      date2: this.$route.query.date2 || '无'
    }
  },
  created () {
    console.log(this)
  }
}
</script>

<style lang="postcss" scoped>
.about {
  font-size: 40px;
}
</style>

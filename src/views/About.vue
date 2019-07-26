<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{date}}</div>
    <div>{{date2}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: this.$route.params.date || '无',
      date2: this.$route.query.date2 || '无'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
    setTimeout(() => {
      this.date2 = 'dadada'
    }, 2000)
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  destroyed () {
    console.log('beforeDestroy')
  }
}
</script>

<style lang="postcss" scoped>
.about {
  font-size: 40px;
}
</style>

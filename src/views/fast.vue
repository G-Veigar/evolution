<template>
  <div class="fast">
    <button @click="hehe.name = '222'">change name</button>
    {{hehe && hehe.name}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      hehe: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.hehe = Object.freeze({
        name: 'hehehhe'
      })
    }, 5000)
  }
}
</script>

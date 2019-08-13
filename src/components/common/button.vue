<template>
  <button @click="show">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {}
  },
  methods: {
    show () {
      console.log(this.text)
    }
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/a.jpg">
    <img alt="Vue logo" src="../assets/a.webp">
    <img alt="Vue logo" src="../assets/b.gif">
    <img alt="Vue logo" src="../assets/c.png">
    <img alt="Vue logo" src="../assets/c.webp">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

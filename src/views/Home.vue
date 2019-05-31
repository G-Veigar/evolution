<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/a.jpg"> -->
    <!-- <img alt="Vue logo" src="../assets/a.webp"> -->
    <!-- <img alt="Vue logo" src="../assets/b.gif"> -->
    <!-- <img alt="Vue logo" src="../assets/c.png"> -->
    <!-- <img alt="Vue logo" src="../assets/c.webp"> -->
    <!-- <op-image :src='imga' type="jpg"></op-image> -->
    <picture>
      <source srcset="../assets/a.webp" type="image/webp">
      <source srcset="../assets/a.jpg" type="image/jpg">
      <img src="../assets/a.jpg" alt="">
    </picture>
    <div class="hehe"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="postcss" scoped>
img {
  width: 500px;
}
.hehe {
  width: 200px;
  height: 200px;
}
.hehe {
  background: url('../assets/cc.png');
  background-size: 100% 100%;
}
.webp .hehe {
  background: url('../assets/cc.webp');
  background-size: 100% 100%;
}
</style>

<template>
  <div class="list-item" :data-key="data.name" @click="handleClick">
    <div class="name">this is {{data.name}}</div>
    <div class="wrapper">
      <div class="name2 inner-item">1</div>
      <div class="name2 inner-item">2</div>
      <div class="name2 inner-item">3</div>
      <div class="name2 inner-item">4</div>
    </div>
    <div class="name2">age is {{data.name}}</div>
    <div class="name2">age is {{data.name}}</div>
    <div class="name2">age is {{data.name}}</div>
    <div class="name2">child is {{data.child && data.child.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {}
  },
  methods: {
    handleClick () {
      console.log(this.data.name)
    }
  }
}
</script>

<style lang="postcss" scoped>
.list-item {
  border: 1px solid #aaa;
  height: 280px;
}
.name {
  font-size: 40px;
  font-weight: bold;
  color: blue;
}
.wrapper {
  display: flex;
}
.inner-item {
  width: 50px;
  height: 40px;
  border: 2px;
  background-color: #aaaaaa;
  margin-right: 10px;
}
</style>

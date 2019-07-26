<template>
  <div class="wrapper">
    <div class="item"></div>
    <div class="item2"></div>
    <div class="item3"></div>
  </div>
</template>

<style>
.wrapper {
  margin-left: 50px;
  margin-right: 50px;
  /* background-color: #aaa; */
  border: 1px solid #aaa;
  min-height: 100vh;
}
.item {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid transparent;
  border-bottom: 50px solid blue;
  background: white;
}
.item2 {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid transparent;
  border-bottom: 50px solid blue;
  border-radius: 50px;
  background: white;
}
.item3 {
  width: 30px;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid transparent;
  border-bottom: 40px solid blue;
  background: white;
}
</style>

<template>
  <div class="center">
    <div class="item-wrapper texts">
      <div class="text-wrapper">
        这是多行文本，这是多行文本，这是多行文本，这是多行文本，这是多行文本，这是多行文本，这是多行文本
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #eeeeee;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}
.item-wrapper {
  margin-top: 20px;
  border: 1px solid #aaa;
  background-color: #fff;
  height: 300px;
  vertical-align: middle;
}
.text-wrapper {
  display: inline-block;
  vertical-align: middle;
}
</style>

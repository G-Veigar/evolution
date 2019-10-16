<template>
  <button class="ev-button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.ev-button {
  min-width: 100px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #666;
  background-color: #ffffff;

  &[disabled]{
    background-color: #ccc;
    border: 1px solid #eee;
    color: red;
  }
}
</style>

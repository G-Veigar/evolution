<template>
  <div class="ev-header" :class="{fixed: fixed}">
    <slot name="left"></slot>
    <div class="header-title">{{title}}</div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.ev-header {
  height: var(--header-height);
  line-height: var(--header-height);
  background-color: var(--header-bg-color);
  color: #fff;
  position: relative;

  &.fixed {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  & .header-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

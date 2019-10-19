<template>
  <button
    class="ev-button"
    :disabled="disabled"
    @click="handleClick">
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
  },
  methods: {
    handleClick ($e) {
      this.$emit('click', $e)
    }
  }
}
</script>

<style lang="postcss" scoped>
.ev-button {

  &[disabled]{
    background-color: #ccc;
    border: 1px solid #eee;
    color: red;
  }
}
</style>

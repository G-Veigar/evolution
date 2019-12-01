<template>
  <button
    class="btn"
    :class="{'btn-disabled': innerDisabled}"
    :disabled="disabled"
    @click="handleInput">
    <span>{{buttonText}}</span>
  </button>
</template>

<script>
export default {
  props: {
    count: { // count不为0时开始倒计时
      type: Number
    },
    name: { // 按钮名
    },
    disabled: { // 是否禁用
      type: Boolean
    }
  },
  data () {
    return {
      innerCount: 0,
      timer: '',
      loading: false, // 正在处理中，防止快速按多次按钮
      loadingDuration: 1000
    }
  },
  computed: {
    buttonText () {
      if (this.innerCount) {
        return this.innerCount + 'S'
      } else {
        return this.name
      }
    },
    innerDisabled () {
      if (this.disabled || (this.innerCount > 0)) {
        return true
      } else {
        return this.loading
      }
    }
  },
  methods: {
    handleInput () {
      if (!this.innerDisabled) {
        this.$emit('click')
      }
    }
  },
  watch: {
    count: {
      handler (val) {
        clearInterval(this.timer)
        this.innerCount = val
        if (val > 0) {
          this.timer = setInterval(() => {
            if (--this.innerCount <= 0) {
              clearInterval(this.timer)
              this.disabled = false
              this.$emit('countDone')
            }
          }, 1000)
        }
      },
      immediate: true
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="postcss" scoped>
@import '../../../styles/var.css';

.btn {
  /* background-color: var(--main-color); */
  background-color: #6D66C6;
  height: 100px;
  border-radius: 50px;
  font-size: 38px;
  color: #FFFFFF;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  flex: 1 0;
}

.btn[disabled], .btn-disabled {
  background-color: #DBDBDB;
}
</style>

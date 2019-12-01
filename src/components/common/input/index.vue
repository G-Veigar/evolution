<template>
  <input
    ref="input"
    :class="$style.input"
    :type="inputType"
    :placeholder="placeholder"
    :readonly="readOnly"
    :value="inputValue"
    @input="handleInput"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    :maxlength="inputLength"/>
</template>

<script>
export default {
  props: {
    placeholder: {},
    type: {}, // 输入框类型 - captcha: 数字证码； letter-captcha: 字母验证；  mobile: 电话； text: 普通文本框
    value: {},
    length: {}, // 最大输入长度
    role: {}, // 实际输入类型 为了兼容 可见密码输入框
    readOnly: {}
  },
  data () {
    return {
      inputValue: '',
      focus: false,
      passwordVisible: false // 密码是否明文可见
    }
  },
  computed: {
    inputType () {
      // 默认text
      if (!this.type) return 'text'
      let res
      switch (this.type) {
        case 'captcha': res = 'number'; break
        case 'letter-captcha': res = 'text'; break
        case 'mobile': res = 'tel'; break
        default : res = this.type
      }
      //  密码明文可见
      if (this.type === 'password' && this.passwordVisible) {
        res = 'text'
      }
      return res
    },
    inputLength () {
      if (this.length) return this.length
      let res
      switch (this.type) {
        case 'mobile': res = 11; break
        case 'captcha': res = 6; break
        case 'bankCard': res = 19; break
      }
      return res
    }
  },
  watch: {
    value: {
      handler (val) {
        this.inputValue = val
      },
      immediate: true
    }
  },
  methods: {
    handleInput (e) {
      if (!this.type || this.type === 'text') {
        this.$emit('input', e.target.value)
        return false
      }
      let value = this.formatVal(e.target.value)
      let inputElem = this.$refs.input
      inputElem.value = value
      this.$emit('input', value)
      // 输入到指定位数后，通知父组件
      if (this.inputLength === value.length) {
        this.$emit('inputComplete')
      }
    },
    // 根据input类型格式化数据
    formatVal (val) {
      if (this.type === 'mobile' || this.type === 'captcha' || this.type === 'bankCard') {
        return val.replace(/\D/g, '').trim()
      } else if (this.role === 'password' || this.type === 'password') {
        return val.replace(/[^a-zA-Z0-9]/g, '').trim()
      } else if (this.type === 'idcard') {
        return val.replace(/[^0-9xX]/g, '').trim()
      }
      return val
    }
  }
}
</script>

<style lang="postcss" module>
.input {
  display: block;
  border: none;
  width: 100%;
  font-size: 38px;
  outline: none;
  background-color: transparent;
  flex: 1 1;
}
</style>

<template>
  <div class="input-wrapper" :class="{'focus': focus}">
    <base-input
      class="base-input"
      :type="baseType"
      :length="length"
      :placeholder="placeholder"
      :value="value"
      :role="inputRole"
      @input="handleInput"
      @focus="handleFocus"
      @blur="focus = false"
      @inputComplete="$emit('inputComplete')"></base-input>
    <div
      v-if="type=='password'"
      class="password-eye"
      :class="{'visible': passwordVisible}"
      @click="passwordVisible = !passwordVisible"></div>
  </div>
</template>

<script>
import baseInput from '@/components/common/input'

export default {
  components: { baseInput },
  props: {
    placeholder: {},
    type: {},
    value: {},
    length: {}
  },
  data () {
    return {
      inputValue: '',
      focus: false,
      passwordVisible: false // 密码是否明文可见
    }
  },
  computed: {
    baseType () {
      if (this.type === 'password' && this.passwordVisible) {
        return 'text'
      } else {
        return this.type
      }
    },
    // 实际意义上的输入类型
    inputRole () {
      return this.type === 'password' ? 'password' : false
    }
  },
  methods: {
    handleFocus () {
      this.focus = true
      this.$emit('focus')
    },
    handleInput (baseInputVal) {
      this.$emit('input', baseInputVal)
    }
  }
}
</script>

<style lang="postcss" scoped>
.input-wrapper {
  border-bottom: 2px solid #DADADA;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  transition: border-color 0.4s;
  position: relative;
}
.base-input {
  padding-left: 0;
  padding-bottom: 0;
  text-indent: 0;
}
.focus {
  border-bottom-color: #59ADC9;
}
.password-eye {
  width: 72px;
  height: 60px;
  background-image: url('./img/eye-close@3x.png');
  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  &.visible {
    background-image: url('./img/eye-open@3x.png');
  }
}
</style>

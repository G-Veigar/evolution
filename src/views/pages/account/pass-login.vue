<template>
  <div class="login">
    <div class="login-content">
      <div class="login-right-btn" @click="goResetPass">忘记密码？</div>
      <div class="title">
        您好，
        <div class="welcome">欢迎来到evo，请立即体验</div>
      </div>
      <login-input
        v-model="mobile"
        type="mobile"
        placeholder="请输入手机号码"
        @inputComplete="check"
        class="mobile-input"></login-input>
      <login-input
        v-model="password"
        placeholder="请输入密码"
        length="20"
        type="password"></login-input>
      <div class="login-wrapper">
        <base-button
          class="login-btn"
          name="登录"
          @click="login"
          :disabled="loginBtnDisabled"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import loginInput from './components/login-input'
import baseButton from '@/components/common/button'
import { userService } from '@/service/user'
import { mobileReg } from '@/constants/reg.js'

export default {
  components: {
    loginInput, baseButton
  },
  data () {
    return {
      mobile: this.$route.query.mobile || '',
      password: ''
    }
  },
  computed: {
    loginBtnDisabled () {
      return this.mobile.length < 11 || this.password.length < 6
    }
  },
  methods: {
    check () {
      if (!mobileReg.test(this.mobile)) {
        this.$Toast('请先输入正确的手机号码')
        return false
      }
      return true
    },
    async login () {
      if (!this.check()) return
      userService.passwordLogin({
        password: this.password,
        mobile: this.mobile
      })
    },
    goResetPass () {
      this.$router.push({
        name: 'resetPass',
        params: {
          type: 'reset'
        },
        query: {
          mobile: this.mobile
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.title {
  font-family: "PingFangSC-Medium";
  font-size: 72px;
  color: var(--main-color);
  position: relative;
  margin-bottom: 120px;
}
.welcome {
  font-size: 42px;
  color: #2B2B35;
  margin-top: 32px;
  margin-bottom: 24px;
  position: absolute;
}
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 100px;
}
.login-btn {
  width: 240px;
}
.mobile-input {
  margin-bottom: 40px;
}
</style>

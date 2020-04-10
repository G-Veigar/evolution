<template>
  <div class="login">
    <div class="login-content">
      <div class="login-right-btn" @click="goPasswordLogin">账号密码登录</div>
      <div class="title">
        您好，
        <div class="welcome">欢迎来到evo，请登录/注册</div>
      </div>
      <login-input
        type="mobile"
        v-model="mobile"
        class="mobile-input"
        placeholder="请输入手机号码"
        @inputComplete="check"></login-input>
      <login-input
        type="captcha"
        v-model="captcha"
        length="6"
        @focus="check"
        @inputComplete="login"
        placeholder="请输入验证码"></login-input>
      <div class="login-tip">如您未注册，则您输入验证码即为您自动注册账号</div>
      <div class="login-wrapper">
        <button class="voice-btn" @click="getVoice">获取语音验证码</button>
        <base-button
          class="captcha-btn"
          name="获取验证码"
          :count="loginBtnCount"
          @click="sendCaptcha"
          @countDone="loginBtnCount=0"
          :disabled="captchaBtnDisabled"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import loginInput from './components/login-input'
import baseButton from '@/components/common/button'
import { userService } from '@/service/user'
import api from './api'
import { mobileReg } from '@/constants/reg.js'

export default {
  data () {
    return {
      mobile: '',
      captcha: '',
      loginBtnCount: 0,
      captchaGetting: false
    }
  },
  components: {
    loginInput, baseButton
  },
  computed: {
    captchaBtnDisabled () {
      return this.mobile.length < 11 || this.captchaGetting
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
    login () {
      if (!this.check()) return
      userService.SMSLogin({
        mobile: this.mobile,
        captcha: this.captcha
      })
    },
    async sendCaptcha () {
      if (!this.check()) return
      this.captchaGetting = true
      this.loginBtnCount = 60
      try {
        await api.sendCaptcha({
          mobile: this.mobile,
          type: 'LOGIN'
        })
        this.captchaGetting = false
      } catch (e) {
        this.loginBtnCount = 0
        this.captchaGetting = false
      }
    },
    // 获取语音验证码
    getVoice () {
      if (!this.check()) return
      this.$Dialog({
        message: '您将收到语音电话，请注意接听',
        cancelText: '取消'
      }).then(async confirm => {
        if (confirm) {
          this.captchaGetting = true
          this.loginBtnCount = 60
          try {
            await api.sendCaptcha({
              mobile: this.mobile,
              type: 'LOGIN',
              isVoice: true
            })
            this.captchaGetting = false
          } catch (e) {
            this.loginBtnCount = 0
            this.captchaGetting = false
          }
        }
      })
    },
    goPasswordLogin () {
      this.$router.push({
        path: '/pass-login',
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
  margin-bottom: 420px;
}
.welcome {
  font-size: 42px;
  color: #2B2B35;
  margin-top: 32px;
  margin-bottom: 24px;
  position: absolute;
}
.login-tip {
  font-size: 24px;
  line-height: 36px;
  color: #868686;
  margin-top: 30px;
}
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
}
.voice-btn {
  color: var(--main-color);
  font-size: 28px;
  padding-left: 0;
}
.mobile-input {
  margin-bottom: 40px;
}
.captcha-btn {
  width: 250px;
  flex: none;
}
</style>

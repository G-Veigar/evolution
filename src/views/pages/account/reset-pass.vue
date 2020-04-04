<template>
  <div class="login">
    <div class="login-content">
      <div class="title">设置密码</div>
      <login-input
        type="mobile"
        v-model="mobile"
        placeholder="请输入手机号码"
        @inputComplete="check"
        class="mobile-input"></login-input>
      <login-input
        type="captcha"
        v-model="captcha"
        @focus="check"
        length="6"
        placeholder="请输入验证码"
        @inputComplete="checkCaptcha"
        class="mobile-input"></login-input>
      <div class="login-wrapper">
        <button class="voice-btn" @click="getVoice">获取语音验证码</button>
        <base-button
          class="captcha-btn"
          name="获取验证码"
          :count="loginBtnCount"
          @click="sendCaptcha"
          :disabled="captchaBtnDisabled"></base-button>
        <!-- <button :class="$style.loginBtn" @click="login">获取验证码</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import loginInput from './components/login-input'
import baseButton from '@/components/common/button'
import api from './api'
import { mobileReg } from '@/constants/reg.js'

export default {
  components: {
    loginInput, baseButton
  },
  data () {
    return {
      type: this.$route.params.type,
      mobile: this.$route.query.mobile || '',
      captcha: '',
      loginBtnCount: 0,
      captchaGetting: false // 验证码发送中
    }
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
    async checkCaptcha () {
      if (!this.check()) return
      const isOk = await api.checkCaptcha({
        mobile: this.mobile,
        captcha: this.captcha,
        type: 'RESETPWD'
      })
      if (isOk) {
        this.$router.push({
          name: 'resetNewpass',
          params: {
            type: this.type,
            mobile: this.mobile
          }
        })
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
              type: 'RESETPWD',
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
    async sendCaptcha () {
      if (!this.check()) return
      this.captchaGetting = true
      this.loginBtnCount = 60
      try {
        await api.sendCaptcha({
          mobile: this.mobile,
          type: 'RESETPWD'
        })
        this.captchaGetting = false
      } catch (e) {
        this.captchaGetting = false
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../../../styles/var.css';

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

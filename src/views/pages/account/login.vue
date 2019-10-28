<template>
  <div class="page-login">
    <input type="username" placeholder="用户名" v-model="username">
    <br>
    <input type="password" placeholder="密码" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push('/')
      } else {
        this.$Toast('用户名或密码错误')
      }
    }
  }
}
</script>

<style lang="postcss">
.page-login {
  & input {
    border: 1px solid #ccc;
  }

  & button {
    border: 1px solid #aaa;
  }
}
</style>

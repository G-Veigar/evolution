<template>
  <div class="page-register">
    <input type="username" placeholder="用户名" v-model="username">
    <br>
    <input type="password" placeholder="密码" v-model="password">
    <button @click="register">注册</button>
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
    register () {
    }
  }
}
</script>

<style lang="postcss">
.page-register {
  & input {
    border: 1px solid #ccc;
  }

  & button {
    border: 1px solid #aaa;
  }
}
</style>

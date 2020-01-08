import router from '@/router'

let userService = {
  // 登录状态—— 0：未登录，1：登录中
  loginStatus: 0,
  // 初始化用户数据
  init () {
    if (localStorage.getItem('loginStatus')) {
      userService.loginStatus = localStorage.getItem('loginStatus')
    }
  },
  // 短信验证码登录
  SMSLogin () {
    userService.loginStatus = 1
    localStorage.setItem('loginStatus', 1)
    router.push('/')
  },
  // 账号密码登录
  passwordLogin () {
    userService.loginStatus = 1
    localStorage.setItem('loginStatus', 1)
    router.push('/')
  }
}

export { userService }

let userService = {
  // 登录状态—— 0：未登录，1：登录中
  loginStatus: 0,
  login () {
    userService.loginStatus = 1
  }
}

export { userService }

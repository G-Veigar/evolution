function track (eventName) {
  if (!process.appConfig.track) return
  // 模拟track请求发送
  console.log(eventName)
}

export default { track }

const ua = navigator.userAgent.toLowerCase()

const isIos = /iphone|ipod|ipad/i.test(ua)
const isAndroid = /Android|Linux/i.test(ua)

// 链式调用结果
let resValue = true
// 当前属性结果
let currentValue = true

// 返回链式调用结果，并重置
const uaObj = function () {
  const res = resValue
  resValue = true
  return res
}

uaObj.isWeixin = ua.includes('micromessenger')
uaObj.isIos = isIos
uaObj.isAndroid = isAndroid
uaObj.isMobile = isIos || isAndroid || /SymbianOS|Windows Phone/i.test(ua)
uaObj.isWebdriver = navigator.webdriver // Selenium,puppeteer等自动化驱动程序

// 支持连点语法：uaService.isIos.isMobile.isWeixin())
const uaService = new Proxy(uaObj, {
  get (target, key, proxy) {
    currentValue = target[key]
    resValue = (resValue && currentValue)
    return proxy
  }
})

export default uaService

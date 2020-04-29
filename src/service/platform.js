const ua = navigator.userAgent.toLowerCase()

const isIos = /iphone|ipod|ipad/.test(ua)
const isAndroid = /android/.test(ua)
const isWechat = ua.includes('micromessenger')
const isMobile = (isIos || isAndroid || /SymbianOS|Windows Phone/i.test(ua))
// 自动化测试程序
const isAutomated = navigator.webdriver

// 设置页面的title
const setPageTitle = (title) => {
  if (title === undefined || window.document.title === title) {
    return
  }
  document.title = title
  if (/iphone|ipad|ipod/.test(ua)) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

export {
  setPageTitle,
  isIos,
  isAndroid,
  isWechat,
  isMobile,
  isAutomated
}

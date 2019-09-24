import axios from 'axios'
import Ui from '../../utils/ui'
import { isEmptyObj } from '../../utils/common'
import { userService } from '../service/user'
import { channelService } from '../service/channel'
import { loginService } from '../service/login'
import { platformService } from '../service/platform'
import * as Api from '@/assets/js/api'
import router from '../router'

let CancelToken = axios.CancelToken

class RequestService {
  constructor (options) {
    this.options = { ...RequestService.defaultOptions, ...options }
    this.axiosInstance = axios.create({
      timeout: this.options.timeout
    })
    // request拦截器
    this.axiosInstance.interceptors.request.use(config => {
      // 自定义拦截器
      let interceptorsRequest = this.options.interceptors.request
      if (interceptorsRequest && (interceptorsRequest instanceof Function)) {
        interceptorsRequest(config)
      }
      // 开启了cancel，如果请求在未完成前发生了页面跳转，则终止请求。
      if (this.options.cancel) {
        if (!this._cancelTokenObj) {
          this._cancelTokenObj = CancelToken.source()
        }
        config.cancelToken = this._cancelTokenObj.token
      }
      // 开启了loading
      if (this.options.loading) {
        config._loading_timer = setTimeout(() => {
          Ui.Loading('')
        }, this.options.loading.delay)
        this._cancelLoadingMap[config._loading_timer] = !!this.options.cancel
      }
      // 开启了自动添加参数
      if (this.options.autoAddParams) {
        let addParams = this.options.autoAddParams()
        config.params = { ...config.params, ...addParams }
      }
      // 开启了shaking，去掉为空的param和data
      if (this.options.shaking) {
        let params = config.params
        for (let key in params) {
          let thisValue = params[key]
          if (thisValue === '' || thisValue === undefined || thisValue === null) {
            delete params[key]
          }
        }
        let data = config.data
        for (let key in data) {
          let thisValue = data[key]
          if (thisValue === '' || thisValue === undefined || thisValue === null) {
            delete data[key]
          }
        }
      }
      // 传参格式 from: application/x-www-form-urlencoded
      if (this.options.dataType) {
        switch (this.options.dataType) {
          case 'form':
            config.headers = { ...config.headers, ...{ 'content-type': 'application/x-www-form-urlencoded' } }
            let USPData = new URLSearchParams()
            for (let key in config.data) {
              USPData.append(key, config.data[key])
            }
            config.data = USPData
            break
          case 'json':
            config.headers = { ...config.headers, ...{ 'content-type': 'application/json;charset=utf-8' } }
            break
          case 'formData':
            config.headers = { ...config.headers, ...{ 'content-type': 'multipart/form-data' } }
            let fData = new FormData()
            for (let key in config.data) {
              fData.append(key, config.data[key])
            }
            config.data = fData
            break
        }
      }
      return config
    }, error => {
      // Do something with request error
      return Promise.reject(error)
    })
    // response 拦截器
    this.axiosInstance.interceptors.response.use(response => {
      // 自定义拦截器
      let interceptorsResponse = this.options.interceptors.response
      if (interceptorsResponse && (interceptorsResponse instanceof Function)) {
        interceptorsResponse(response)
      }
      let timer = response.config._loading_timer
      let cancelLoadingMap = this._cancelLoadingMap
      if (this.options.loading && timer) {
        clearTimeout(timer)
        delete cancelLoadingMap[timer]
        isEmptyObj(cancelLoadingMap) && Ui.Loading.close()
      }
      let apiErrorHandle = this.options.apiErrorHandle
      apiErrorHandle && apiErrorHandle(response)
      return response.data
    }, error => {
      if (error.response) {
        let timer = error.response.config._loading_timer
        let cancelLoadingMap = this._cancelLoadingMap
        if (this.options.loading && timer) {
          clearTimeout(timer)
          delete cancelLoadingMap[timer]
          isEmptyObj(cancelLoadingMap) && Ui.Loading.close()
        }
        let httpErrorHandle = this.options.httpErrorHandle
        httpErrorHandle && httpErrorHandle(String(error.response.status))
      } else if (String(error).indexOf('timeout') > 0) {
        Ui.Loading.close()
        Ui.Toast('连接超时')
      }
      return Promise.reject(error)
    })
    this.request = (config) => {
      if (!config.url) {
        return Promise.reject(new Error('url不能为空'))
      }
      return this.axiosInstance(config)
    }
  }
}

RequestService.defaultOptions = {
  timeout: 10000,
  shaking: true,
  cancel: false,
  loading: {
    delay: 2500 // 多少毫秒后显示loading
  },
  dataType: 'form',
  interceptors: {
    request: null,
    response: null
  },
  httpErrorHandle: async (statusCode) => {
    if (statusCode !== 200) {
      console.log('http error', statusCode)
    }
    statusCode = (+statusCode)
    if (statusCode >= 500) {
      Ui.Dialog({
        message: '服务器错误，请联系管理员',
        confirmText: '确定'
      })
      return
    }
    switch (statusCode) {
      case 404:
        Ui.Dialog({
          message: '服务器错误，请联系管理员',
          confirmText: '确定'
        })
        break
      case 401:
      case 403:
        if (channelService.name === '闪管家') {
          // if (platformService.isInApp()) {
          //   location.href = 'http://www.wecash.net'
          // } else {
          //   loginService.handleTokenOverdue()
          // }
          loginService.handleTokenOverdue()
        } else {
          Ui.Dialog({
            message: '登录超时',
            confirmText: '确定'
          })
        }
        break
      case 456:
        if (channelService.name === '闪管家') {
          // app内嵌h5时 触发网页跳转，方便app捕获
          // if (platformService.isInApp()) {
          //   location.href = 'http://www.wecash.net'
          // } else {
          //   autoRefreshToken()
          // }
          autoRefreshToken()
        } else {
          Ui.Dialog({
            message: '登录超时',
            confirmText: '确定'
          })
        }
        break
      default:
        Ui.Dialog({
          message: '请求错误，请联系管理员',
          confirmText: '确定'
        })
    }
  },
  apiErrorHandle (res) {
    if (res.data && (res.data.errcode !== 200)) {
      Ui.Toast(res.data.msg || '服务器错误')
    }
  },
  autoAddParams () {
    return {
      token: userService.token,
      userId: userService.userId,
      channelId: userService.channelId,
      version: userService.version
    }
  }
}

async function autoRefreshToken () {
  // 如果内嵌app中 需重新登录
  if (platformService.isInApp()) {
    loginService.toLogin()
    return
  }
  let userId = userService.userId
  let refreshToken = userService.refreshToken
  let channelId = userService.channelId
  // 区分Android iOS 还是公众号
  let version = userService.version
  if (sessionStorage.getItem('refreshTokening')) {
    return
  }
  sessionStorage.setItem('refreshTokening', 1)
  let params = new URLSearchParams()
  params.append('userId', userId)
  params.append('channelId', channelId)
  params.append('version', version)
  params.append('refreshToken', refreshToken)
  try {
    let response = await axios.post(Api.refreshToken, params)
    sessionStorage.removeItem('refreshTokening')
    if (response.status === 200 && response.data.errcode === 200) {
      let resData = response.data.object
      userService.refreshToken = resData.refreshToken
      userService.token = resData.accessToken
      router.go(0)
    } else {
      loginService.handleTokenOverdue()
    }
  } catch (e) {
    sessionStorage.removeItem('refreshTokening')
    loginService.handleTokenOverdue()
  }
}

// 创建默认Http实例（默认参数创建）
let http = new RequestService()

// options为Http类的配置
RequestService.get = (api, params = {}, options = {}) => {
  // 如果传入了options，重新实例化http
  let innerHttp = isEmptyObj(options) ? http : new RequestService(options)
  return innerHttp.request({
    method: 'get',
    url: api,
    params
  })
}
RequestService.post = (api, data = {}, options = {}) => {
  let innerHttp = isEmptyObj(options) ? http : new RequestService(options)
  return innerHttp.request({
    method: 'post',
    url: api,
    data
  })
}
// 接近原生axios, config就是axios的配置
RequestService.request = (config, options = {}) => {
  let innerHttp = isEmptyObj(options) ? http : new RequestService(options)
  return innerHttp.request(config)
}

RequestService.prototype._cancelLoadingMap = {}

RequestService.prototype._cancelTokenObj = null

RequestService.routerBeforeEach = () => {
  // 如果当前页面有待取消请求，则取消
  if (RequestService.prototype._cancelTokenObj) {
    RequestService.prototype._cancelTokenObj.cancel('cancel axios promise')
    RequestService.prototype._cancelTokenObj = null
  }
  let cancelLoadingMap = RequestService.prototype._cancelLoadingMap
  for (let timer in cancelLoadingMap) {
    // 可cancel的请求，消除timer
    cancelLoadingMap[timer] && clearTimeout(timer)
    delete cancelLoadingMap[timer]
    isEmptyObj(cancelLoadingMap) && Ui.Loading.close()
  }
  cancelLoadingMap = {}
}

export { RequestService }

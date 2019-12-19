// TODO:中间件模式实现request
// 可取消
import axios from 'axios'

// let CancelToken = axios.CancelToken

const defaultOptions = {
  timeout: 5000,
  cancel: true
}

const request = axios.create({
  timeout: defaultOptions.timeout
})

request.interceptors.request.use(function (config) {
  return config
})

request.interceptors.request.use(function (response) {
  return response
})

const requestService = {
  get (url, query, option) {
    return request.get(url)
  }
  // post (url, query, option) {

  // }
}

export { requestService }

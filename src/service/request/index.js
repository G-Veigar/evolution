// TODO：可取消
import axios from 'axios'
import modResponse from './mod-response'

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

request.interceptors.response.use(function (response) {
  modResponse(response)
  return response
})

const requestService = {
  get (url, query, option) {
    return request.get(url, {
      params: query
    })
  }
  // post (url, query, option) {

  // }
}

export { requestService }

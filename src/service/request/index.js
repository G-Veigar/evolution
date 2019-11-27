// TODO:中间件模式实现request
// 可取消
import axios from 'axios'

// let CancelToken = axios.CancelToken

const defaultOptions = {
  timeout: 5000
}

const request = axios.create({
  timeout: defaultOptions.timeout
})

export default request

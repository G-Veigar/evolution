/*
 * @Author: gaoge
 * @Date: 2019-12-24 23:42:31
 * @Last Modified by: gaoge
 * @Last Modified time: 2019-12-24 23:43:26
 * 接口数据拦截配置，方便开发中mock各种状态的数据
 */

export default [
  {
    path: '/getInfo',
    modify (data) {
      data.data = ['1']
      return data
    }
  },
  {
    path: 'login',
    modify (data) {
      data.data = false
      return data
    }
  }
]

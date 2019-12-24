/*
 * @Author: gaoge
 * @Date: 2019-12-20 01:30:45
 * @Last Modified by: gaoge
 * @Last Modified time: 2019-12-24 23:33:18
 * 拦截接口返回数据，方便在开发阶段mock各种状态的数据
 */
import modResponseRules from '../../../configs/mod-response-rules'

const modResponse = function (response) {
  const { url } = response.config
  modResponseRules.forEach(rule => {
    if (url.match(rule.path) || url.includes(rule.path)) {
      response.data = rule.modify(response.data)
    }
  })
}

export default modResponse

import Ui from '@/service/ui'
import { userService } from '@/service/user'
import { requestService } from '@/service/request'
import url from './url'

const api = {
  // 发送手机验证码-免登录
  sendCaptcha ({ mobile, type, isVoice }) {
    return new Promise(async (resolve, reject) => {
      let res = await requestService.request({
        method: 'post',
        url: url.sendCaptcha,
        data: {
          mobile,
          businessType: type,
          isVoice
        },
        headers: {
          'Authorization': userService.ipToken
        }
      }, {
        autoAddParams () {
          return {
            channelId: userService.channelId,
            version: userService.version
          }
        }
      })
      if (res.errcode === 200) {
        Ui.Toast(res.msg || '验证码已发送到您的手机，请注意查收')
        resolve(res.data)
      } else {
        reject(new Error(res.msg || '获取验证码失败，请稍后再试'))
      }
    })
  }
}

export default api

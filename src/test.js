
var axios = require('axios')

var textData = {
  'msgtype': 'text',
  'text': {
    'content': '年轻人，你的想法很危险',
    'mentioned_list': ['yangguang']
  }
}

// var markdownData = {
//   'msgtype': 'markdown',
//   'markdown': {
//     'content': decodeURI(`前端上线通知，请相关同事注意。\n>项目:<font color=\"comment\">auto-front-sms-prod</font> \n>功能:<font color=\"comment\">数据报表</font> \n>负责人:<font color=\"comment\">高歌</font>`),
//     'mentioned_list': ['@all']
//   }
// }

let options = {
  method: 'post',
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=ac1cc798-ae6a-4722-89b2-00df8b1f92f5',
  header: {
    'Content-Type': 'application/json'
  },
  data: textData
}

axios(options)

// ui组件插件
import ui from '../utils/ui.js'

const uiPlugin = {
  install (Vue) {
    Vue.prototype.$Toast = ui.Toast
  }
}

export default uiPlugin

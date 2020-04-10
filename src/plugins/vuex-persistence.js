/*
 * 持久化vuex数据，防止刷新导致数据重置
 * @Author: gaoge
 * @Date: 2020-04-10 15:24:00
 * @Last Modified by: gaoge
 * @Last Modified time: 2020-04-10 17:38:33
 */

const vuexPersistence = {
  // vue插件注册方法
  install (Vue, store, storeState) {
    window.addEventListener('beforeunload', () => {
      // 处理sessionState
      let keys = Object.keys(storeState.session)
      let storeData = {}
      keys.forEach(key => {
        storeData[key] = store.state[key]
      })
      sessionStorage.setItem('vuex_store_state', JSON.stringify(storeData))
      // 处理localState
      keys = Object.keys(storeState.local)
      storeData = {}
      keys.forEach(key => {
        storeData[key] = store.state[key]
      })
      localStorage.setItem('vuex_store_state', JSON.stringify(storeData))
    })
  },
  // 用本地缓存的state更新 state
  init (state) {
    const resState = { ...state.session, ...state.local }
    const sessionState = sessionStorage.getItem('vuex_store_state')
    const localState = localStorage.getItem('vuex_store_state')
    sessionState && Object.assign(resState, JSON.parse(sessionState))
    localState && Object.assign(resState, JSON.parse(localState))
    return resState
  }
}

export default vuexPersistence

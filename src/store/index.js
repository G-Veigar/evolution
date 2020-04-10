import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistence from '../plugins/vuex-persistence'

Vue.use(Vuex)

// 需要持久化的stage
// session：sessionStorage存储
// local：localStorage存储
export const storeState = {
  session: {
    testData2: 'test2'
  },
  local: {
    testData: 'test'
  }
}

const state = {
  ...vuexPersistence.init(storeState),
  tabbarRedPoint: {}, // tabbar的小红点儿
  apiComponent: ''
}

const mutations = {
  setRedPoint (state, data) {
    state.tabbarRedPoint = data
  },
  setApiComponent (state, data) {
    state.apiComponent = data
  },
  setTestData (state, data) {
    state.testData = data
  },
  setTestData2 (state, data) {
    state.testData2 = data
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

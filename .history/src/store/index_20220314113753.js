import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    isLogin:false
  },
  mutations: {
    setUserInfo(state, provide) {
      state.userInfo = {...provide}
    },
    getLoginState(state) {
      state.isLogin = true
    }
  },
  actions: {
    SETUSERINFO({ commit }, provide) {
      commit('setUserInfo',provide)
    }
  },
  modules: {
  }
})

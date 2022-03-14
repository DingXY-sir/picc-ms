import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    setUserInfo(state, provide) {
      state.userInfo = {...provide}
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

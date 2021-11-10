import Vue from 'vue'
import Vuex from 'vuex'
import {getItem, setItem} from '../utils/storage'

Vue.use(Vuex)
const USERKEY = 'UserToken'
export default new Vuex.Store({
  state: {
    token:getItem(USERKEY) //初始化token
  },
  mutations: {
    setToken(state,data){
      state.token = data
      setItem(USERKEY,state.token )
    }
  },
  actions: {
  },
  modules: {
  }
})

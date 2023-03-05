import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login_code: false,
  username: ''
}

const store = new Vuex.Store({
  state,
  mutations: {
    getlogin(state){
      state.login_code = true;
    },
    getusername(state,name){
      state.username = name
    }
  },
  acitons: {},
  getters: {},
  modules: {}
})

export default store
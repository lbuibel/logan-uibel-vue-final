import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedVehicles: [],
    user: {
      name: '',
      email: '',
      address: ''
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    }
  },
  actions: {
    orderSubmitted ({ commit }, user) {
      commit('storeUser', user)
      router.replace('/confirmation')
    }
  },
  getters: {
    user (state) {
      return state.user.name
    }
  }
})

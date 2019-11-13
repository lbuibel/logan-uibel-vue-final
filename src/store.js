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
    userName (state) {
      return state.user.name
    },
    userEmail (state) {
      return state.user.email
    },
    userAddress (state) {
      return state.user.address
    }
  }
})

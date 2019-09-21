import Vue from 'vue'
import Vuex from 'vuex'
import city from './cityStores/cityStores'
import user from './userStores/userStores'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    city,
    user
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import colaboradoresStore from './modules/colaboradorStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  modules: {
    colaboradoresStore: colaboradoresStore
  }
})

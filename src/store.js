import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colaboradores: [
      { id: 1, nome: 'Homem Aranha', dataCadastro: Date.now(), status: true },
      { id: 2, nome: 'Homem Formiga', dataCadastro: Date.now(), status: true },
      { id: 3, nome: 'Vespa', dataCadastro: Date.now(), status: false },
      { id: 4, nome: 'Mulher Maravilha', dataCadastro: Date.now(), status: true },
      { id: 5, nome: 'Super-man', dataCadastro: Date.now(), status: false }
    ]
  },
  getters: {
    colaboradoresAtivos: state => { return state.colaboradores.filter(c => c.status) }
  },
  mutations: {

  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colaboradores: [
      { id: 1, nome: 'Homem Aranha', dataCadastro: new Date(), status: true },
      { id: 2, nome: 'Homem Formiga', dataCadastro: new Date(), status: true },
      { id: 3, nome: 'Vespa', dataCadastro: new Date(), status: false },
      { id: 4, nome: 'Mulher Maravilha', dataCadastro: new Date(), status: true },
      { id: 5, nome: 'Super-man', dataCadastro: new Date(), status: false }
    ]
  },
  getters: {
    colaboradoresAtivos: state => {
      return state
        .colaboradores
        .filter(colab => colab.status)
        .map(c => { return { ...c, dataCadastroFormatada: c.dataCadastro.toDateString() } })
    }
  },
  mutations: {

  },
  actions: {

  }
})

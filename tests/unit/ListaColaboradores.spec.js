import Vuex from 'vuex'
import { expect } from 'chai'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ListaColaborades from '@/components/ListaColaboradores.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ListaColaboradores.vue', () => {
  let store

  beforeEach(() => {
    let getters = {
      colaboradoresAtivos: () => {
        return [
          { id: 5, nome: 'Super-man', dataCadastro: new Date(), dataCadastroFormatada: new Date().toLocaleString(), status: true }
        ]
      }
    }

    store = new Vuex.Store({ getters })
  })

  it('renders nomes colaboradores after mount', () => {
    let lista = shallowMount(ListaColaborades, { store, localVue })

    expect(lista.text()).to.contains('Super-man')
    expect(lista.text()).to.contains(new Date().toLocaleString())
  })
})

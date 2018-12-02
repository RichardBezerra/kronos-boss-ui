import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import EditColaborador from '@/components/colaborador/EditColaborador.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMaterial)

describe('EditColaborador.vue', () => {
  it('call method to create new Colaborador when Add button is clicked', () => {
    let store
    let buttonClicked = false

    store = new Vuex.Store({
      mutations: {
        create () {
          buttonClicked = true
        }
      }
    })

    let editComponent = mount(EditColaborador, { store, localVue })

    let addButton = editComponent.find('#colaborador-button')

    addButton.trigger('click')

    expect(buttonClicked).to.equal(true)
  })

  it('pass a filled Colaborador when Add button is clicked', () => {
    let store
    let colaborador

    store = new Vuex.Store({
      mutations: {
        create (state, payload) {
          colaborador = payload
        }
      }
    })

    let editComponent = mount(EditColaborador, { store, localVue })

    let addButton = editComponent.find('#colaborador-button')

    addButton.trigger('click')

    expect(colaborador).to.have.property('id')
    expect(colaborador).to.have.property('nome')
    expect(colaborador).to.have.property('dataCadastro')
    expect(colaborador).to.have.property('status')
    expect(colaborador).to.have.property('matricula')
    expect(colaborador).to.have.property('cpf')
    expect(colaborador).to.have.property('email')
    expect(colaborador).to.have.property('celular')
    expect(colaborador).to.have.property('pis')
    expect(colaborador).to.have.property('passwordlog')
    expect(colaborador).to.have.property('departamento')
    expect(colaborador).to.have.property('turno')
  })
})

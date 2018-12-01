import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import EditColaborador from '@/components/colaborador/EditColaborador.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('EditColaborador.vue', () => {
  it('call method to create new Colaborador when Add button is clicked', () => {
    let store
    let buttonClicked = false

    let mutations = {
      create: () => {
        buttonClicked = true
      }
    }

    store = new Vuex.Store({ mutations })

    let editComponent = shallowMount(EditColaborador, { store, localVue })

    let addButton = editComponent.find('button')

    addButton.trigger('click')

    expect(buttonClicked).to.equal(true)
  })
})

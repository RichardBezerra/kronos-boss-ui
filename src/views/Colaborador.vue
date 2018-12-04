<template>
  <div>
    <edit-colaborador />
    <lista-colaboradores />
  </div>
</template>

<script>
import ListaColaboradores from '@/components/colaborador/ListaColaboradores.vue'
import EditColaborador from '@/components/colaborador/EditColaborador.vue'

export default {
  name: 'ColaboradorPage',

  components: {
    ListaColaboradores,
    EditColaborador
  }
}
</script>

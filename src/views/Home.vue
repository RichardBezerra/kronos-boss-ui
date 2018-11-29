<template>
  <div class="home">
    <EditColaborador />
    <ListaColaboradores />
  </div>
</template>

<script>
import ListaColaboradores from '@/components/colaborador/ListaColaboradores.vue'
import EditColaborador from '@/components/colaborador/EditColaborador.vue'

export default {
  name: 'home',
  components: {
    ListaColaboradores,
    EditColaborador
  }
}
</script>

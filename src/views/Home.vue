<template>
  <div class="home">
    <ListaColaboradores />
  </div>
</template>

<script>
import ListaColaboradores from '@/components/colaborador/ListaColaboradores.vue'

export default {
  name: 'home',
  components: {
    ListaColaboradores
  }
}
</script>

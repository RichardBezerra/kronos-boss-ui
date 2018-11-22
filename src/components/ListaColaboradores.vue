<template>
    <div>
        <span v-for="item in colaboradoresAtivos" :key="item.id">
            {{ item.nome }}
        </span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListaColaboradores',

  computed: {
    ...mapGetters(['colaboradoresAtivos'])
  }
}
</script>

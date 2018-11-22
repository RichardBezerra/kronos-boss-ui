<template>
    <div>
        <ul>
            <li v-for="item in colaboradoresAtivos" :key="item.id">
                <span>{{ item.nome }}</span>
                <span>{{ item.dataCadastroFormatada }}</span>
            </li>
        </ul>
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

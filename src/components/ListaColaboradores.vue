<template>
    <div>
        <ul>
            <li v-for="item in colaboradoresAtivos" :key="item.id">
                <div>
                    <img :src=item.photo />
                </div>
                <div>{{ item.nome }}</div>
                <div>{{ item.dataCadastroFormatada }}</div>
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

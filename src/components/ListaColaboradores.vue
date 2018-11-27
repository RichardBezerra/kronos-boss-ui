<template>
  <div>
    <md-list class="md-triple-line">
      <div v-for="item in colaboradoresAtivos" :key="item.id">
        <md-list-item>
          <md-avatar>
            <img :src="item.photo" alt="People">
          </md-avatar>

          <div class="md-list-item-text">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <div>{{ item.nome }}</div>
                <div>Texto</div>
              </div>
              <div class="md-layout-item md-size-15">{{ item.dataCadastroFormatada }}</div>
            </div>
          </div>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
      </div>
    </md-list>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListaColaboradores',

  computed: {
    ...mapGetters(['colaboradoresAtivos'])
  }
}
</script>

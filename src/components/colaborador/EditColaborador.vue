<template>
  <div>
    <button @click="createColaborador" title="Add">Add</button>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'EditColaborador',

  methods: {
    ...mapMutations(['create']),

    createColaborador () {
      this.create({ dataCadastro: new Date() })
    }
  }
}
</script>

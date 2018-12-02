<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Colaborador</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-80">
              <md-field>
                <label for="name">Nome</label>
                <md-input name="name" id="name" autocomplete="given-name" v-model="colaborador.nome" />
              </md-field>
            </div>

            <div class="md-layout-item md-size-20">
              <md-field>
                <label for="matricula">Matrícula</label>
                <md-input name="matricula" id="matricula" v-model="colaborador.matricula" />
              </md-field>
            </div>

            <div class="md-layout-item md-size-100">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="cpf">CPF</label>
                    <md-input name="cpf" id="cpf" v-model="colaborador.cpf" />
                  </md-field>
                </div>

                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="pis">PIS</label>
                    <md-input name="pis" id="pis" v-model="colaborador.pis" />
                  </md-field>
                </div>
              </div>
            </div>

            <div class="md-layout-item md-size-100">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="senha">Senha</label>
                    <md-input name="senha" id="senha" v-model="colaborador.passwordlog" />
                  </md-field>
                </div>

                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="cargo">Cargo</label>
                    <md-input name="cargo" id="cargo" v-model="colaborador.cargo" />
                  </md-field>
                </div>
              </div>
            </div>

            <div class="md-layout-item md-size-100">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="departamento">Departamento</label>
                    <md-select name="departamento" id="departamento" v-model="colaborador.departamento" />
                  </md-field>
                </div>

                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="turno">Turno</label>
                    <md-select name="turno" id="turno" v-model="colaborador.turno" />
                  </md-field>
                </div>
              </div>
            </div>

            <div class="md-layout-item md-size-100">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="email">Email</label>
                    <md-input name="email" id="email" v-model="colaborador.email" />
                  </md-field>
                </div>

                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label for="celular">Celular</label>
                    <md-input name="celular" id="celular" v-model="colaborador.celular" />
                  </md-field>
                </div>
              </div>
            </div>

          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary" @click="createColaborador">Cadastrar</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'EditColaborador',

  data () {
    return {
      colaborador: {
        id: 0,
        nome: '',
        dataCadastro: new Date(),
        status: true,
        matricula: '',
        cpf: '',
        email: '',
        celular: '',
        pis: '',
        passwordlog: '',
        departamento: '',
        turno: 1
      }
    }
  },

  methods: {
    ...mapMutations(['create']),

    createColaborador () {
      console.log('clicado')
      this.create(this.colaborador)
    }
  }
}
</script>

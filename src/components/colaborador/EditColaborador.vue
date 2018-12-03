<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Colaborador</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-70">

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
            </div>

            <div class="md-layout-item md-size-30">
              <img :src="srcImagePreview" v-if="srcImagePreview.length" />
              <md-empty-state md-icon="add_a_photo" v-else>
                <md-button @click="openFotoFileSelector" id="colaborador-photo-button">Foto</md-button>
                <input type="file" id="colaborador-file-selector" accept="image/*;capture=camera" v-on:change="previewPicture" />
              </md-empty-state>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button
            type="submit"
            class="md-raised md-primary"
            id="colaborador-button"
            @click="createColaborador">Cadastrar</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.picture {
  background-color: #EEE;
}
input[type="file"] {
  display: none;
}
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
        turno: 1,
        photo: ''
      },
      srcImagePreview: ''
    }
  },

  methods: {
    ...mapMutations(['create']),

    createColaborador () {
      this.create(this.colaborador)
    },

    openFotoFileSelector () {
      document.getElementById('colaborador-file-selector').click()
    },

    previewPicture () {
      this.srcImagePreview = (window.URL ? URL : webkitURL).createObjectURL(document.getElementById('colaborador-file-selector').files[0])
    }
  }
}
</script>

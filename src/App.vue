<template>
  <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Kronos Boss</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Dashboards</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Departamentos</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Turnos</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Colaboradores</span>
          </md-list-item>

           <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Relatórios</span>
          </md-list-item>

           <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Afastamentos</span>
          </md-list-item>

           <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Tablets</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
</template>

<style lang="scss" scoped>
.md-drawer {
  width: 250px;
  max-width: calc(100vw - 125px);
}

.md-app {
  height: 100%;
}
</style>

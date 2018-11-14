<template>
  <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Kronos Boss</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Menu
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Item 1</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Item 2</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Items 3</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Item 4</span>
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

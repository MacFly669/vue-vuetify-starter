<template>
{{#vuetify}}
<v-app id="app" dark>
   <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
            align-center
          >
            <v-flex xs12 text-xs-center>
              <span><img src="./assets/logo.png" alt="logo"></span>
              <span><img src="./assets/v.png" alt="vuetify"></span>
            </v-flex>
        {{else}}
        <div id="app">
          <span><img src="./assets/logo.png" alt="logo"></span>
          <span><img src="./assets/v.png" alt="vuetify"></span>
        {{/vuetify}}
        {{#router}}
        <router-view/>
        {{else}}
        <HelloWorld/>
        {{/router}}
        {{#vuetify}}
          </v-layout>
            <v-footer app>
              <span>&copy; {{copyDate}}</span>
            </v-footer>          
        </v-container>
      </v-content>
    </main>
</v-app>
{{else}}
</div>
{{/vuetify}}
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#unless vuetify}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/unless}}{{/router}}{{#vuetify}},
  data: () => ({
    drawer: true,
    clipped: false,
    fixed: true,
    miniVariant: false
  }),
  computed: {
    copyDate: () => { return new Date().getFullYear() }
  },
  methods: {
    routerBack () { this.$router.back() },
    routerForward () { this.$router.forward() }
  }{{/vuetify}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

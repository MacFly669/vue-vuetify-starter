<template>
{{#vuetify}}
<v-app id="app" dark>
  
    <v-container fluid grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 sm5 offset-sm3>
              
                <v-snackbar
                        :timeout="3000"
                        v-model="snackbar"
                        :top="true"
                >
                    {{ text }}
                </v-snackbar>
            </v-flex>
        </v-layout>
        <v-navigation-drawer
                fixed
                overflow
                app
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                enable-resize-watcher
        >
            <v-list class="mt-5 bouton">
                <v-list-tile
                class="menuAnim"
                v-for="item in menuItems"
                :key="item.title"
                router
                :to="item.link"
                ripple
                >
                <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                    <v-list-tile-content>{{ item.title | translate }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    <v-toolbar  app :clipped-left="clipped" :fixed="fixed" light class="primary" height="50" >
        <v-toolbar-side-icon @click.stop="drawer = !  drawer" dark></v-toolbar-side-icon>
        <v-btn icon dark @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn icon dark @click.stop="clipped = !clipped" >
            <v-icon>web</v-icon>
        </v-btn>
        <v-btn icon dark @click.stop="fixed = !fixed" >
            <v-icon dark>remove</v-icon>
        </v-btn>
        <v-btn icon dark>
            <v-icon dark>group</v-icon>
        </v-btn>
        <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" class="xs2"><v-icon dark class="">home</v-icon></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip
        placement="top"
        >
          <v-btn slot="activator" flat icon @click="routerBack">
          <v-icon dark>arrow_left</v-icon>
          </v-btn>
          <span>{{ 'Go back' }}</span>
        </v-tooltip>
        
          <v-btn dark flat icon @click="routerForward">
          <v-icon dark>arrow_right</v-icon>
          </v-btn>
        <v-toolbar-items class="hidden-lg-and-down top-menu">
            <v-btn
            light
            flat
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
            @click="item.action || null"
            class="left-btn white--text"
            >
            <v-icon left dark>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-xs-only" @click.prevent.stop="onLogout">
            <v-btn flat @click.prevent.stop="setLanguage('fr')">
                <img src="./assets/locale/fr.jpg" alt="" width="30px">
            </v-btn>
            <v-btn flat @click.prevent.stop="setLanguage('en')">
                <img src="./assets/locale/en.jpg" alt="" width="30px">
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
 <main>
    <v-content>
      <v-container fluid>
        {{else}}
        <div id="app">
          <img src="./assets/logo.png" alt="logo">
        {{/vuetify}}
        {{#router}}
        <router-view/>
        {{else}}
        <HelloWorld/>
        {{/router}}
        {{#vuetify}}
      </v-container>
    </v-content>
 </main>
<v-footer app></v-footer>
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

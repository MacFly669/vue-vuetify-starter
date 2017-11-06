<template>
{{#vuetify}}
<v-container>
 <v-layout row wrap align-center>
  <v-flex xs12 text-xs-center>
      <h2>Vue webpack with router - vuex - vuetify - axios</h2>
        <p>A starter Vue webpack template with vuetify, store and axios</p>
    </v-flex>
    <v-flex xs12 md6 offset-md3>
      <v-card>
        <v-card-media src="http://lorempicsum.com/futurama/627/200/3" width="627px" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">VueJS rocks !</h3>
            <div>Vue webpack starter boilerplate <br>Vuetify, Store, Route, Axios ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Enjoy</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</v-layout> 
</v-container>
{{else}}
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
  {{/vuetify}}
</template>

<script>
export default {
  name: 'HelloWorld',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
{{#vuetify}}
{{else}}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
{{/vuetify}}
</style>

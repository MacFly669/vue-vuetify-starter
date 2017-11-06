{{#vuex}}import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import app from './app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// import modules/plugins here

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  strict: true,
  // plugins: [logger],
  modules: {
    app{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
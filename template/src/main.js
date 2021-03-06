{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#vuex}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

{{#axios}}
import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/axios}}
{{#vuetify}}
import Vuetify from 'vuetify'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuetify}}
import EventBus from './event'

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuetify){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#axios}}
Vue.prototype.$_bus = EventBus
Vue.prototype.$_axios = axios{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/axios}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

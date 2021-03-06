{{#vuex}}import state from './state'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import actions from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import mutations from './mutations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import getters from '/getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  state,
  actions,
  mutations,
  getters{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
{{/vuex}}
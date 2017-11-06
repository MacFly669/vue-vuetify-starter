import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
// import modules/plugins here 

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  // plugins: [logger],
  modules: {
    app
  }
})

export default store

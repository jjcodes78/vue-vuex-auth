import Vue from 'vue'
import Vuex from 'Vuex'
import api from './api'
import auth from './auth'
import notification from './notification'

Vue.use(Vuex)

export default new Vuex.Store({  
    modules: {
      api,
      auth,
      notification
    }
  })
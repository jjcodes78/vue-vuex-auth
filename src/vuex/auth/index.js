/**
 * Created by squad on 15/07/16.
 */

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_TOKEN = 'SET_TOKEN'
const CLEAR_TOKEN = 'CLEAR_TOKEN'

const state = {
  token: null,
  user: {},
  authenticated: false
}

const mutations = {
  [SET_USER] (state, user) {
    state.user = user
    state.authenticated = true
  },

  [REMOVE_USER] (state) {
    state.user = {}
    state.authenticated = false
  },

  [SET_TOKEN] (state, token) {
    state.token = token
  },

  [CLEAR_TOKEN] (state) {
    state.token = null
  }
}

export default {
  state,
  mutations
}
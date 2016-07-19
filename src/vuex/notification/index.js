/**
 * Created by squad on 16/07/16.
 */

// Notificaçoes comuns
const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

const state = {
  show: false,
  options: {}
}

const mutations = {
  [HIDE_NOTIFICATION] (state) {
      state.show = false
  },

  [SHOW_NOTIFICATION] (state, notification) {
    state.options = notification
    state.show = true
  }
}

export default {
  state,
  mutations
}
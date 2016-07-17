/**
 * Created by squad on 16/07/16.
 */

// Notificaçoes comuns
const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION'
const CONNECTION_ERROR = 'CONNECTION_ERROR'

// Notificações de login
const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED'

const state = {
  show: false,
  options: {}
}

const mutations = {
  [DISMISS_NOTIFICATION] (state) {
      state.show = false
  },

  [CONNECTION_ERROR] (state) {
    state.options = {
      duration: 5000,
      type: 'danger',
      title: 'Oops! Erro',
      message: 'Verifique a conexão e tente novamente.',
      description: 'Não foi possível estabelecer uma conexão com o serviço. (ERR_CONNECTION_REFUSED)'
    }
    state.show = true
  },

  [USER_LOGGED_IN] (state) {
    state.options = {
      duration: 3000,
      type: 'success',
      title: 'OK!',
      message: 'Login efetuado com sucesso!'
    }
    state.show = true
  },

  [USER_UNAUTHORIZED] (state) {
    state.options = {
      duration: 5000,
      type: 'danger',
      title: 'Oops! Erro',
      message: 'E-mail e/ou senha inválidos.',
      description: 'Contate o administrador do sistema. (UNAUTHORIZED)'
    }
    state.show = true
  }

}

export default {
  state,
  mutations
}
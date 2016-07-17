/**
 * Created by squad on 16/07/16.
 */

// Notificaçoes comuns
const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION'
const CONNECTION_ERROR = 'CONNECTION_ERROR'             // status 0
const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR'   // status 500

// Notificações de login
const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
const INVALID_TOKEN = 'INVALID_TOKEN'                   // status 400
const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED'           // status 401
const ACCESS_FORBIDDEN = 'ACCESS_FORBIDDEN'             // status 403
const NOT_FOUND = 'NOT_FOUND'                           // status 404

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

  [INTERNAL_SERVER_ERROR] (state) {
    state.options = {
      duration: 5000,
      type: 'danger',
      title: 'Oops! Erro',
      message: 'Erro interno do servidor.',
      description: 'Não foi possível estabelecer uma conexão com o serviço. (INTERNAL_SERVER_ERROR)'
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

  [USER_LOGGED_OUT] (state) {
    state.options = {
      duration: 3000,
      type: 'success',
      title: 'OK!',
      message: 'Logout efetuado com sucesso!',
      description: 'Faça login novamente para voltar a utilizar a aplicação.'
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
  },

  [INVALID_TOKEN] (state) {
    state.options = {
      duration: 5000,
      type: 'danger',
      title: 'Oops! Erro',
      message: 'Token de acesso inválido.',
      description: 'Efetue login novamente ou contate o administrador do sistema. (INVALID_TOKEN)'
    }
    state.show = true
  }

}

export default {
  state,
  mutations
}
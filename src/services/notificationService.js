/**
 * Created by squad on 18/07/16.
 */

import store from '../vuex/store'

const CONNECTION_ERROR = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Verifique a conexão e tente novamente.',
  description: 'Não foi possível estabelecer uma conexão com o serviço. (ERR_CONNECTION_REFUSED)'
}

const INTERNAL_SERVER_ERROR = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Erro interno do servidor.',
  description: 'Não foi possível estabelecer uma conexão com o serviço. (INTERNAL_SERVER_ERROR)'
}

// Notificações de login
const USER_LOGGED_IN = {
  duration: 3000,
  type: 'success',
  title: 'OK!',
  message: 'Login efetuado com sucesso!'
}

const USER_LOGGED_OUT = {
  duration: 3000,
  type: 'success',
  title: 'OK!',
  message: 'Logout efetuado com sucesso!',
  description: 'Faça login novamente para voltar a utilizar a aplicação.'
}

const INVALID_TOKEN = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'E-mail e/ou senha inválidos.',
  description: 'Contate o administrador do sistema. (UNAUTHORIZED)'
}

const USER_UNAUTHORIZED = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Token de acesso inválido.',
  description: 'Efetue login novamente ou contate o administrador do sistema. (INVALID_TOKEN)'
}

const ACCESS_FORBIDDEN = 'ACCESS_FORBIDDEN'             // status 403
const NOT_FOUND = 'NOT_FOUND'                           // status 404

const show = function (options) {
  store.dispatch('SHOW_NOTIFICATION', options)
}
const hide = function () {
  store.dispatch('HIDE_NOTIFICATION')
}

export default {
  show,
  hide,
  CONNECTION_ERROR,
  INTERNAL_SERVER_ERROR,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  INVALID_TOKEN,
  USER_UNAUTHORIZED
}
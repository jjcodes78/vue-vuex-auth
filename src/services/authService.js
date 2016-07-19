/**
 * Created by squad on 16/07/16.
 */

import store from '../vuex/store'
import { API_AUTH_URL, API_LOGOUT_URL, API_USER_PROFILE_URL } from '../router/paths'

/**
 * Se o login for bem sucedido obtém-se o profile do usuário logado
 * e retorna a Promise com o resultado
 */
const getUserProfile = function(context, token) {
  return context.$http({
    url: API_USER_PROFILE_URL,
    method: 'GET',
    headers: {
      'Authorization': `Bearer:${token}`,
      'Access-Control-Allow-Origin': '*' //TODO: remover CORS
    }
  })
}

const login = function (context, body) {
  return context.$http({
    url: API_AUTH_URL,
    method: "POST",
    body: body,
    headers: {
      'Access-Control-Allow-Origin': '*' //TODO: remover CORS
    }
  })
}

const logout = function (context, token) {
  return context.$http({
    url: API_LOGOUT_URL,
    method: 'GET',
    headers: {
      'Authorization': `Bearer:${token}`,
    }
  })
}

const setAuthentication = function (token, user) {
  localStorage.setItem('jwt-token', token)
  store.dispatch('SET_TOKEN', token)
  store.dispatch('SET_USER', user)
}

const removeAuthentication = function () {
  localStorage.removeItem('jwt-token')
  store.dispatch('REMOVE_TOKEN')
  store.dispatch('REMOVE_USER')
}

export default {
  getUserProfile,
  login,
  logout,
  setAuthentication,
  removeAuthentication
}
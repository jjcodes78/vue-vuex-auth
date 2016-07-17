/**
 * Created by squad on 16/07/16.
 */

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

export default {
  getUserProfile,
  login,
  logout
}
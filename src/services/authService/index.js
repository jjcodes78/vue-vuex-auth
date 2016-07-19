/**
 * Created by squad on 16/07/16.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../../vuex/store'
import authenticated from './vuex/auth/getters'
import { API_AUTH_URL, API_LOGOUT_URL, API_USER_PROFILE_URL } from '../../router/paths'

Vue.use(VueResource)

/**
 * Se o login for bem sucedido obtém-se o profile do usuário logado
 * e retorna a Promise com o resultado
 */
const getUserProfile = function() {
  return Vue.http({
    url: API_USER_PROFILE_URL,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token'),
      'Access-Control-Allow-Origin': '*' //TODO: remover CORS
    }
  })
}

const login = function (body) {
  return Vue.http({
    url: API_AUTH_URL,
    method: "POST",
    body: body,
    headers: {
      'Access-Control-Allow-Origin': '*' //TODO: remover CORS
    }
  })
}

const logout = function () {
  return Vue.http({
    url: API_LOGOUT_URL,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  })
}

const setToken = function (token) {
  localStorage.setItem('jwt-token', token)
  store.dispatch('SET_TOKEN', token)
}

const setUser = function (user) {
  store.dispatch('SET_USER', user)
}

const set = function (type, value) {
  switch (type) {
    case 'token':
      setToken(value)
      break
    case 'user':
      setUser(value)
      break
  }
}

const remove = function () {
  localStorage.removeItem('jwt-token')
  store.dispatch('REMOVE_TOKEN')
  store.dispatch('REMOVE_USER')
}

const getToken = function () {
  return store.state.auth.token
}

const getUser = function () {
  return store.state.auth.user
}

const isLoggedIn = function () {
  return store.state.auth.authenticated
}

export default {
  getUserProfile,
  login,
  logout,
  set,
  remove,
  isLoggedIn,
  setToken,
  setUser,
  getToken,
  getUser
}
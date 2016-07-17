/**
 * Created by squad on 15/07/16.
 */

/**
 * obtém o valor do token do state
 * @param state
 * @returns {token|*|null}
 */
const token = function (state) {
    return state.auth.token
}

/**
 * obtém o valor de user do state
 * @param state
 * @returns {*}
 */
const user = function (state) {
    return state.auth.user
}

/**
 * obtem o valor authenticated, se há um usuário logado
 * @param state
 * @returns {authenticated|*|boolean}
 */
const authenticated = function (state) {
  return state.auth.authenticated
}

export default {
  token,
  user,
  authenticated
}
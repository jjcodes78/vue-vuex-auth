/**
 * Created by squad on 15/07/16.
 */

/**
 * authService: métodos para mutations de autenticação
 *
 * @type {{setToken: (function(*, *=)), setUser: (function(*, *=)), logout: (function(*))}}
 */
const authService = {
  /**
   * Armazena o token JWT do usuario autenticado na store e no localStorag
   * @param dispatch
   * @param token
   */
  setToken ({dispatch}, token) {
    localStorage.setItem('jwt-token', token)
    dispatch('SET_TOKEN', token)
  },

  /**
   * Armazena os dados do usuário autenticado
   * @param dispatch
   * @param user
   */
  setUser ({dispatch}, user) {
    dispatch('SET_USER', user)
  },

  /**
   * Remove o token e o usuário da store, e o token do localStorage
   * @param dispatch
   */
  logout ({dispatch}) {
    localStorage.removeItem('jwt-token')
    dispatch('CLEAR_TOKEN')
    dispatch('REMOVE_USER')
  }
}

export default authService
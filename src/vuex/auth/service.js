/**
 * Created by squad on 15/07/16.
 */

const authService = {
  setToken ({dispatch}, token) {
    dispatch('SET_TOKEN', token)
  },

  setUser ({dispatch}, user) {
    dispatch('SET_USER', user)
  },

  logout ({dispatch}) {
    dispatch('CLEAR_TOKEN')
    dispatch('REMOVE_USER')
  }
}

export default authService

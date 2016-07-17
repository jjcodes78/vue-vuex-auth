/**
 * Created by squad on 16/07/16.
 */

const SET_API_STATUS = 'SET_API_STATUS'

const state = {
  status: false
}

const mutations = {
  [SET_API_STATUS] (state, status) {
    state.status = status
  }
}

export default {
  state,
  mutations
}
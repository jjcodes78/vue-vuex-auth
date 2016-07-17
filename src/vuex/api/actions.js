/**
 * Created by squad on 16/07/16.
 */


const apiService = {
  setApiStatus ({dispatch}, status) {
    dispatch('SET_API_STATUS', status)
  }
}

export default apiService
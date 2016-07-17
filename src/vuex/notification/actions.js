/**
 * Created by squad on 16/07/16.
 */

const notificationActions = {

  dismissNotification({dispatch}) {
    dispatch('DISMISS_NOTIFICATION')
  },
  connectionError ({dispatch}) {
    dispatch('CONNECTION_ERROR')
  },
  serverError ({dispatch}) {
    dispatch('INTERNAL_SERVER_ERROR')
  },
  userLoggedIn ({dispatch}) {
    dispatch('USER_LOGGED_IN')
  },
  userLoggedOut ({dispatch}) {
    dispatch('USER_LOGGED_OUT')
  },
  loginNotAuthorized ({dispatch}) {
    dispatch('USER_UNAUTHORIZED')
  },
  invalidToken ({dispatch}) {
    dispatch('INVALID_TOKEN')
  }

}

export default notificationActions
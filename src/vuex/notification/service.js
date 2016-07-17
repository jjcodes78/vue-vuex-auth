/**
 * Created by squad on 16/07/16.
 */

const notificationService = {

  dismissNotification({dispatch}) {
    dispatch('DISMISS_NOTIFICATION')
  },
  connectionError ({dispatch}) {
    dispatch('CONNECTION_ERROR')
  },
  userLoggedIn ({dispatch}) {
    dispatch('USER_LOGGED_IN')
  },
  userLoggedOut ({dispatch}) {
    dispatch('USER_LOGGED_OUT')
  },
  loginNotAuthorized ({dispatch}) {
    dispatch('USER_UNAUTHORIZED')
  }

}

export default notificationService
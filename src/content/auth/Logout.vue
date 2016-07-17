<script>
  import authGetters from '../../vuex/auth/getters'
  import authActions from '../../vuex/auth/actions'
  import notificationActions from '../../vuex/notification/actions'
  import authService from '../../services/authService'
  import { HOME_URL, LOGIN_URL } from '../../router/paths'

  export default {

    vuex: {

      getters: {
        token: authGetters.token
      },

      actions: {
        logout: authActions.logout,
        showUserLoggedOut: notificationActions.userLoggedOut,
        showServerError: notificationActions.serverError
      }
    },

    route: {
      activate (transition) {

        return authService.logout(this, this.token).then(function () {
          this.logout()
          this.showUserLoggedOut()
          transition.redirect(LOGIN_URL)
        }).catch(function (res) {
          //TODO: custom notification
          if ( res.status == 500 ) {
            this.showServerError()
          }
          transition.redirect(HOME_URL)
        })
      }
    }
  }
</script>

<template>
  <div></div>
</template>



<script>
  import authGetters from '../../vuex/auth/getters'
  import notificationService from '../../services/notificationService'
  import authService from '../../services/authService'
  import { HOME_URL, LOGIN_URL } from '../../router/paths'

  export default {

    vuex: {

      getters: {
        token: authGetters.token
      }
    },

    route: {
      activate (transition) {

        return authService.logout(this, this.token).then(function () {
          authService.removeAuthentication()
          notificationService.show(notificationService.USER_LOGGED_OUT)
          transition.redirect(LOGIN_URL)
        }).catch(function (res) {
          //TODO: custom notification
          if ( res.status == 500 ) {
            notificationService.show(notificationService.CONNECTION_ERROR)
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



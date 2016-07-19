<script>
  import notificationService from '../../services/notificationService'
  import authService from '../../services/authService'
  import { HOME_URL, LOGIN_URL } from '../../router/paths'

  export default {

    route: {
      activate (transition) {

        return authService.logout().then(function () {
          authService.remove()
          notificationService.show(notificationService.USER_LOGGED_OUT)
          transition.redirect(LOGIN_URL)
        }).catch(function (res) {
          if ( res.status == 500 ) {
            notificationService.show(notificationService.CONNECTION_ERROR)
          }
          transition.redirect(transition.from.path)
        })

      }
    }
  }
</script>

<template>
  <div></div>
</template>



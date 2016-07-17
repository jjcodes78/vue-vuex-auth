<script>
  import authService from '../../vuex/auth/service'
  import { LOGIN_URL } from '../../router/paths'

  export default {

    vuex: {
      actions: {
        logout: authService.logout
      }
    },

    ready () {
      this.logout()
      this.$router.go(LOGIN_URL)
    }
  }
</script>

<template>
  <div></div>
</template>



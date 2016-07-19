<script>

    import store from './vuex/store'
    import authGetters from './vuex/auth/getters'
    import notificationGetters from './vuex/notification/getters'
    import navbar from './components/navbar.vue'
    import alert from 'vue-strap/src/Alert.vue'

    import notificationService from './services/notificationService'
    import authService from './services/authService'

    import { HOME_URL, LOGIN_URL } from './router/paths'

    export default {

        store,

        vuex: {
            getters: {
                user: authGetters.user,
                authenticated: authGetters.authenticated,
                show: notificationGetters.show,
                notificationOptions: notificationGetters.options
            }
        },

        ready () {

            //First AUTH CHECK
            let token = localStorage.getItem('jwt-token')

            if (token === null) {
                return this.$router.go(LOGIN_URL)
            }

            authService.getUserProfile(this, token).then(function (res) {

                let user = res.data.user
                //CREDENTIALS FOUND AND VALID
                authService.setAuthentication(token, user)
                this.$router.go(HOME_URL)

            }).catch(function (res) {

                switch (res.status) {
                    case 400:
                        notificationService.show(notificationService.INVALID_TOKEN)
                        break
                    case 401:
                        if (res.error = 'token_invalid') {
                            this.showNotification(notificationService.INVALID_TOKEN)
                            break
                        }
                        this.showNotification(notificationService.USER_UNAUTHORIZED)
                        break
                    case 500:
                        this.showNotification(notificationService.INTERNAL_SERVER_ERROR)
                        break
                    default:
                        this.showNotification(notificationService.CONNECTION_ERROR)
                        break

                }
                authService.removeAuthentication()
            }) //-----> authService.getUserProfile

        },

        components: {
            navbar,
            alert
        },

        data () {
            return {
                notificationVisible: false
            }
        },

        watch: {
            show (val) {
                this.notificationVisible = val
            },

            notificationVisible (val) {
                if(!val) {
                    notificationService.hide()
                }
            }
        }
    }
</script>

<template>
    <div id="app">
        <alert name="apiErrorAlert"
               :show.sync="notificationVisible"
               :duration="notificationOptions.duration || 3000"
               :type="notificationOptions.type || 'success' "
               width="400px"
               placement="top-right"
               dismissable
        >
            <i :class="notificationOptions.icon"></i>
            <strong>{{ notificationOptions.title }}</strong>
            <p>{{ notificationOptions.message }}</p>
            <small><em>{{ notificationOptions.description }}</em></small>
        </alert>
        <navbar :visible="authenticated" :user="user"></navbar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
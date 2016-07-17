<script>

    import store from './vuex/store'
    import authGetters from './vuex/auth/getters'
    import authActions from './vuex/auth/actions'
    import authService from './services/authService'
    import notificationGetters from './vuex/notification/getters'
    import notificationActions from './vuex/notification/actions'
    import Menu from './content/default/Menu.vue'
    import alert from 'vue-strap/src/Alert.vue'

    export default {

        store,

        vuex: {
            getters: {
                user: authGetters.user,
                authenticated: authGetters.authenticated,
                show: notificationGetters.show,
                notifyOptions: notificationGetters.options
            },

            actions: {
                setToken: authActions.setToken,
                setUser: authActions.setUser,
                logout: authActions.logout,
                dismissNotification: notificationActions.dismissNotification,
                showLoginNotAuthorized: notificationActions.loginNotAuthorized,
                showServerError: notificationActions.serverError,
                showConnectionError: notificationActions.connectionError,
                showInvalidToken: notificationActions.invalidToken
            }
        },

        components: {
            Menu,
            alert
        },

        data () {
            return {
                showNotification: false
            }
        },

        methods: {
            checkCredentials () {
                let storedToken = localStorage.getItem('jwt-token')

                if( storedToken === null ) {
                    return Promise.reject()
                }

                return authService.getUserProfile(this, storedToken).then(function (res) {

                    let user = res.data.user
                    //CREDENTIALS FOUND AND VALID
                    this.setToken(storedToken)
                    this.setUser(user)

                }).catch(function (res) {

                    switch (res.status) {
                        case 400:
                            this.showInvalidToken()
                            break
                        case 401:
                            this.showLoginNotAuthorized()
                            break
                        case 500:
                            router.app.showServerError()
                            break
                        default:
                            this.showConnectionError()
                            break
                    }
                    this.logout()

                })
            }
        },

        computed: {
            notificationIcon () {
                return this.notifyOptions.type == 'success' ? 'glyphicon-ok-sign' :
                        this.notifyOptions.type == 'danger' ? 'glyphicon-remove-sign' : 'glyphicon-info-sign'
            }
        },

        watch: {
            show (val) {
                this.showNotification = val
            },

            showNotification (val) {
                if(!val) {
                    this.dismissNotification()
                }
            }
        }
    }
</script>

<template>
    <div id="app">
        <alert name="apiErrorAlert"
               :show.sync="showNotification"
               :duration="notifyOptions.duration || 3000"
               :type="notifyOptions.type || 'success' "
               width="400px"
               placement="top-right"
               dismissable
        >
            <i class="glyphicon" :class="notificationIcon"></i>
            <strong>{{ notifyOptions.title }}</strong>
            <p>{{ notifyOptions.message }}</p>
            <small><em>{{ notifyOptions.description }}</em></small>
        </alert>
        <menu :visible="authenticated" :user="user"></menu>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
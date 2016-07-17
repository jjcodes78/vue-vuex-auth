<script>
    import notificationActions from '../../vuex/notification/actions'
    import authActions from '../../vuex/auth/actions'
    import authGetters from '../../vuex/auth/getters'
    import authService from '../../services/authService'
    import { HOME_URL } from '../../router/paths'

    export default{

        vuex: {
            getters: {
                token: authGetters.token,
                authenticated: authGetters.authenticated
            },

            actions: {
                setToken: authActions.setToken,
                setUser: authActions.setUser,
                logout: authActions.logout,
                showConnectionError: notificationActions.connectionError,
                showUserLoggedIn: notificationActions.userLoggedIn,
                showLoginNotAuthorized: notificationActions.loginNotAuthorized
            }
        },

        data () {
            return {
                email: '',
                password: '',
                error: ''
            }
        },

        methods: {
            /**
             *  Verifica se o campo está com erro
             *
             * @param field
             * @returns {*}
             */
            invalid (field) {
                return field.dirty && field.invalid
            },

            /**
             * Envia as informações de login para o servidor
             */
            submit() {
                //Clear error text
                this.error = ''

                let formBody = {
                    email: this.email,
                    password: this.password
                }

                authService.login(this, formBody).then(function (res) {
                    let token = res.data.token
                    if(token !== undefined ) {
                        this.setToken(token)

                        //AUTH PROFILE
                        authService.getUserProfile(this, token).then(function (res) {
                            let user = res.data.user
                            if( user !== null || user !== undefined) {
                                this.setUser(user)
                                this.showUserLoggedIn()
                                this.$router.go(HOME_URL)
                            }
                        }.bind(this)).catch(function () {
                            this.logout()
                        })
                    }
                }.bind(this)).catch(function (res) {
                    if( res.status == 401 ) {
                        this.showLoginNotAuthorized()
                    }
                    if( res.status == 0 ) {
                        this.showConnectionError()
                    }
                }.bind(this))
            }
        }
    }
</script>

<template src="./Login.view.html"></template>
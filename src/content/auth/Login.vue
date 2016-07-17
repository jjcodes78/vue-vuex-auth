<script>
    import notificationService from '../../vuex/notification/service'
    import authService from '../../vuex/auth/service'
    import authGetters from '../../vuex/auth/getters'
    import userService from '../../services/authService'
    import { HOME_URL, API_URL, AUTH_URL } from '../../router/paths'

    export default{

        vuex: {
            getters: {
                token: authGetters.token,
                authenticated: authGetters.authenticated
            },

            actions: {
                setToken: authService.setToken,
                setUser: authService.setUser,
                logout: authService.logout,
                showConnectionError: notificationService.connectionError,
                showUserLoggedIn: notificationService.userLoggedIn,
                showLoginNotAuthorized: notificationService.loginNotAuthorized
            }
        },

        route: {
            activate (transition) {
                if (! this.authenticated ) {
                    return transition.next()
                }
                transition.redirect(HOME_URL)
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

                userService.login(this, formBody).then(function (res) {
                    let token = res.data.token
                    if(token !== undefined ) {
                        this.setToken(token)

                        //USER PROFILE
                        userService.getUserProfile(this, this.token).then(function (res) {
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
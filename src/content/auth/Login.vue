<script>
    import notificationService from '../../services/notificationService'
    import authService from '../../services/authService'
    import { HOME_URL } from '../../router/paths'

    export default{

        components: {

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

                let formBody = {
                    email: this.email,
                    password: this.password
                }

                authService.login(formBody).then(function (res) {
                    let token = res.data.token
                    if(token !== undefined ) {
                        authService.set('token', token)
                        authService.getUserProfile().then(function (res) {
                            let user = res.data.user
                            if( user !== null || user !== undefined) {
                                authService.set('user', user)
                                notificationService.show(notificationService.USER_LOGGED_IN)
                                this.$router.go(HOME_URL)
                            }
                        }.bind(this)).catch(function (res) {
                            window.console.log('error', res);
                            authService.remove()
                        })
                    }
                }.bind(this)).catch(function (res) {
                    if( res.status == 401 ) {
                        notificationService.show(notificationService.INVALID_TOKEN)
                    }
                    if( res.status == 0 ) {
                        notificationService.show(notificationService.CONNECTION_ERROR)
                    }
                }.bind(this))
            }
        }
    }
</script>

<template src="./Login.view.html"></template>
<script>
    import { token } from '../../vuex/auth/getters'
    import authService from '../../vuex/auth/service'

    export default{

        vuex: {
            getters: {
                token
            },

            actions: authService
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

                this.$http({
                    url: 'http://localhost:8000/api/v1/auth',
                    method: "POST",
                    body: {
                        email: this.email,
                        password: this.password
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*' //TODO: remover CORS
                    }

                }).then(function (res) {
                    if(res.data.token !== undefined ) {
                        this.setToken(res.data.token)
                        this.getUserProfile()
                    }
                }.bind(this)).catch(function (res) {
                    if( res.data.status_code == 401 ) {
                        this.error = 'E-Mail e/ou senha inválidos!'
                    }
                }.bind(this))
            },

            /**
             * Se o login for bem sucedido obtém-se o profile do usuário logado
             * e armazena-o na STORE
             */
            getUserProfile () {
                this.$http({
                    url: 'http://localhost:8000/api/v1/user/profile',
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer:${this.token}`,
                        'Access-Control-Allow-Origin': '*' //TODO: remover CORS
                    }
                }).then(function (res) {
                    if(res.data !== undefined) {
                        this.setUser(res.data.user)
                        this.$router.go('/')
                    }
                }).catch(function (res) {
                    //Se um erro acontecer, o token deve ser removido
                    this.logout()
                    this.$router.go('/auth/login')
                })
            }

        }
    }
</script>

<template src="./Login.view.html"></template>
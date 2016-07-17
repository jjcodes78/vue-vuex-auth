<template>
    <div>
        <h3>Dashboard! \o/</h3>
        <p></p>
        <p>Aqui vai conter dados comuns de toda a aplicação... ou não!</p>
        <hr>
        <p>Um painel de administração, gráficos, tabelas, listas e demais informações.</p>

    </div>
</template>

<script>

    import authGetters from '../../vuex/auth/getters'

    export default {

        vuex: {
            getters: {
                token: authGetters.token,
                user: authGetters.user,
                authenticated: authGetters.authenticated
            }
        }
    }
</script>
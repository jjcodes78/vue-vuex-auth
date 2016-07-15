<script>
    import authService from '../../vuex/auth/service'
    export default {
        vuex: {
            actions: authService
        },

        route: {
            activate ({ redirect }) {
                this.logout()
                redirect('/auth/login')
            }
        }
    }
</script>

<template>
    <div></div>
</template>
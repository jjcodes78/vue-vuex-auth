<template>
    <div>
        <h3>Dashboard! \o/</h3>

    </div>
</template>

<script>

    import { token, user } from '../../vuex/auth/getters'

    export default {

        vuex: {
            getters: {
                token,
                user
            }
        }
    }
</script>
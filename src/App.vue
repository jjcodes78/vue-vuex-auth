<script>

    import store from './vuex/store'
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
                show: notificationGetters.show,
                notificationOptions: notificationGetters.options
            }
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
        },

        computed: {
            isLogged () {
                return authService.isLoggedIn()
            },
            user () {
                return authService.getUser()
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
        <navbar :visible="isLogged" :user="user"></navbar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
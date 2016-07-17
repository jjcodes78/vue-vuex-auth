<script>

    import store from './vuex/store'
    import authGetters from './vuex/auth/getters'
    import authService from './vuex/auth/service'
    import notificationGetters from './vuex/notification/getters'
    import notificationService from './vuex/notification/service'
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
                setUser: authService.setUser,
                logout: authService.logout,
                dismissNotification: notificationService.dismissNotification
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

        computed: {
            alertIcon () {
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
            <i class="glyphicon" :class="alertIcon"></i>
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
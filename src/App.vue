<template>
    <div id="app">
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <span class="navbar-brand">vue-browcomplete with bootstrap</span>
            </div>
            <template v-if="userLogged">
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a v-link="{ path: '/' }" class="navbar-link">
                                <i class="fa fa-home"></i>
                                <span>Main Content</span>
                            </a>
                        </li>
                        <li>
                            <a v-link="{ path: '/resourceExample' }" class="navbar-link">
                                <i class="fa fa-link"></i>
                                <span>Resource example</span>
                            </a>
                        </li>
                        <li>
                            <a v-link="{ path: '/vuexExample' }" class="navbar-link">
                                <i class="fa fa-bolt"></i>
                                <span>Vuex example</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </template>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import store from './vuex/store'
import { user, userLogged } from './vuex/auth/getters'

export default {
    store,

    data () {
        return { }
    },

    vuex: {
        getters: {
            user
        }
    },

    computed: {
        userLogged
    }
}
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
<script>
    import sidebar from 'vue-strap/src/Aside.vue'
    import { HOME_URL, LOGOUT_URL } from '../../router/paths'

    export default {

        props: ['visible', 'user'],

        components: {
            sidebar
        },

        data () {
            return {
                showSideBar: false
            }
        },

        methods: {

        },

        computed: {
            profileAvatar () {
                return this.user.avatar_url || 'https://avatars2.githubusercontent.com/u/12722517?v=3&u=18bf882b10e7cde77ce61d35e03e9e01e4c0f151&s=140'
            },
            homeUrl () {
                return {
                    path: HOME_URL
                }
            },
            logoutUrl () {
                return {
                    path: LOGOUT_URL
                }
            }
        }
    }
</script>

<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <span class="navbar-brand">vue-browcomplete with bootstrap</span>
            </div>
            <template v-if="visible">
                <sidebar :show.sync="showSideBar" placement="right" header="Perfil" :width="300">
                    <div>
                        <div class="row well-sm">
                            <div class="col-md-3">
                                <img :src="profileAvatar" width="64" height="64">
                            </div>
                            <div class="col-md-9">
                                <span><strong>{{ user.name }}</strong></span>
                            </div>
                        </div>
                    </div>
                </sidebar>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar">
                        <li>
                            <a v-link="homeUrl" class="navbar-link">
                                <i class="glyphicon glyphicon-dashboard"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                    </ul>

                    <!-- USUARIO -->
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" @click="showSideBar = true" class="navbar-link">
                                <img :src="profileAvatar" class="img-circle" width="24" height="24">
                                <span>{{ user.name }}</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" v-link="logoutUrl" class="navbar-link">
                                <i class="glyphicon glyphicon-log-out"></i>
                                <span>Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </template>
        </nav>
    </div>
</template>
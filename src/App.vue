<template>
    <div id="app">
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <span class="navbar-brand">vue-browcomplete with bootstrap</span>
            </div>
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
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import store from './vuex/store'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  store
}
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
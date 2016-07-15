import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routerConfig } from './routerconfig'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(VueResource)

//Define the router instance
const router = new VueRouter({
  hashbang: false
})
//Call router configuration function
routerConfig(router)
//Start the router
router.start(App, 'App')

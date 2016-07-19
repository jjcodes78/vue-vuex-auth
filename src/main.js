import Vue from "vue"
import VueResource from "vue-resource"
import VueRouter from "vue-router"

import App from "./App.vue"
import { routerConfig } from "./router/config"
import VueValidator from "vue-validator"

Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter()

//Configura o Router
routerConfig(router)

//Inicia o Router
router.start(App, "App")
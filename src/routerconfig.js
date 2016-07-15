import Dashboard from './content/default/Dashboard.vue'
import Login from './content/auth/Login.vue'
import Logout from './content/auth/Logout.vue'
import NotFound from './content/default/NotFound.vue'

const routes = {
    '*': {
        component: NotFound
    },
    '/': {
        component: Dashboard,
        auth: true
    },
    '/auth/login': {
        component: Login
    },
    '/logout': {
        component: Logout
    }
}

export function routerConfig(router) {

    router.map(routes)

    router.beforeEach(function (transition) {
        if(transition.to.auth && !router.app.userLogged) {
            return transition.redirect('/auth/login')
        } else {
            transition.next()
        }
    })
}
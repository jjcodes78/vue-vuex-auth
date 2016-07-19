/**
 * Created by squad on 15/07/16.
 */

/**
 * Componentes das rotas
 */
import Main from '../content/default/Main.vue'
import Login from '../content/auth/Login.vue'
import Logout from '../content/auth/Logout.vue'
import About from '../content/default/About.vue'
import * as path from './paths'

const routes = {
  [path.HOME_URL]: {
    component: Main,
    auth: true
  },
  [path.LOGIN_URL]: {
    component: Login,
    guest: true
  },
  [path.LOGOUT_URL]: {
    component: Logout,
    auth: true
  },
  [path.ABOUT_URL]: {
    component: About,
    auth: true
  }
}

export default routes
/**
 * Created by squad on 15/07/16.
 */

/**
 * Componentes das rotas
 */
import Main from '../content/default/Main.vue'
import Login from '../content/auth/Login.vue'
import Logout from '../content/auth/Logout.vue'
import NotFound from '../content/default/NotFound.vue'
import * as path from './paths'

const routes = {
  [path.HOME_URL]: {
    component: Main,
    auth: true
  },
  [path.LOGIN_URL]: {
    component: Login
  },
  [path.LOGOUT_URL]: {
    component: Logout,
    auth: true
  },
  [path.USER_PROFILE_URL]: {
    component: Main,
    auth: true
  }
}

export default routes
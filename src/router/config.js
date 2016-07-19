/**
 * Configura o Router:
 * - define as rotas e os componentes
 * - cria a rota padrão de redirecionamento
 * - e monitora a cada transição se há um usuário logado
 */
import routes from './routes'
import authService from '../services/authService'
import { HOME_URL, LOGIN_URL } from './paths'

export function routerConfig(router) {

  router.map(routes)

  /**
   * A cada transição é verificada se:
   * - a rota precisa de autenticação para ser visitada
   * - se há usuário logado
   * - se há um token válido para refazer a autenticação
   */
  router.beforeEach(function (transition) {

    let token = null

    if (!authService.isLoggedIn()) {
      token = localStorage.getItem('jwt-token')
    }

    if (transition.to.auth && token !== null && !authService.isLoggedIn()) {

      authService.setToken(token)
      return authService.getUserProfile()
        .then(function (res) {
          authService.setUser(res.data.user)
          transition.next()
        }).catch(function () {
          authService.remove()
          transition.redirect(LOGIN_URL)
        })
    } else if (transition.to.auth && !authService.isLoggedIn()) {

      transition.redirect(LOGIN_URL)

    } else if (transition.to.guest && authService.isLoggedIn()) {

      transition.redirect(transition.from.path)

    } else {

      transition.next()

    }

  })

  router.redirect({
    '*': '/'
  })

}
/**
 * Configura o Router:
 * - define as rotas e os componentes
 * - cria a rota padrão de redirecionamento
 * - e monitora a cada transição se há um usuário logado
 */
import routes from './routes'
import { HOME_URL, LOGIN_URL } from './paths'

export function routerConfig(router) {

    router.map(routes)

    router.redirect({
      '*': '/'
    })

    //TODO: otimizar/refatorar esse bloco
  /**
   * A cada transição é verificada se:
   * - a rota precisa de autenticação para ser visitada
   * - se há usuário logado
   * - se há um token válido para refazer a autenticação
   */
  router.beforeEach(function (transition) {

    if (transition.to.auth && !router.app.authenticated) {
      transition.redirect(LOGIN_URL)
    } else if (transition.to.login && router.app.authenticated) {
      transition.redirect(HOME_URL)
    } else {
      transition.next()
    }

  })
}
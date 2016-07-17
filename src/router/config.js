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

      if (!router.app.authenticated ) {

          return router.app.checkCredentials().then(function () {
              if (transition.to.auth) {
                  transition.next()
              } else {
                  transition.redirect(HOME_URL)
              }
          }).catch(function () {
              if ( transition.to.auth ) {
                  transition.redirect(LOGIN_URL)
              } else {
                  transition.next()
              }
          })
      }

      if (router.app.authenticated ) {
          if (transition.to.auth) {
              transition.next()
          } else {
              transition.redirect(HOME_URL)
          }
      }


  })
}
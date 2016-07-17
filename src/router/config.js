/**
 * Configura o Router:
 * - define as rotas e os componentes
 * - cria a rota padrão de redirecionamento
 * - e monitora a cada transição se há um usuário logado
 */
import routes from './routes'
import { LOGIN_URL } from './paths'
import authService from '../services/authService'

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
        if(transition.to.auth && !router.app.authenticated) {
            let storedToken = localStorage.getItem('jwt-token')
            if( storedToken !== null) {
                authService.getUserProfile(router.app, storedToken).then(function (res) {
                    let user = res.data.user
                    if (user !== null || user !== undefined) {
                        router.app.setUser(user)
                    }
                }).catch(function (res) {
                    if (res.status != 401) {
                        router.app.serviceError()
                    }
                })
                return transition.next()
            }
            router.app.logout()
            return transition.redirect(LOGIN_URL)
        }
        transition.next()
    })
}
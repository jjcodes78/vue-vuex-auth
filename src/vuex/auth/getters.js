/**
 * Created by squad on 15/07/16.
 */

export function token (state) {
    return state.auth.token
}

export function user (state) {
    return state.auth.user
}

export function userLogged () {
  return this.user.name !== undefined
}
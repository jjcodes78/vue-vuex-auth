/**
 * Created by squad on 16/07/16.
 */

const show = function (state) {
  return state.notification.show
}

const options = function (state) {
  return state.notification.options
}

export default {
  show,
  options
}
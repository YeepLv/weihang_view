import * as types from './mutation-types'

export default {
  [types.BODY_OFFSET_LEFT] (state, payload) {
    state.bodyOffsetLeft = payload
  },
  [types.BODY_HAS_TRIAL] (state, hasTrial) {
    state.hasTrial = hasTrial
  }
}

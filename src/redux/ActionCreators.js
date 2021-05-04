import * as ActionTypes from './ActionTypes'

export const doToken = (token) => ({
  type: ActionTypes.DO_TOKEN,
  payload: token
})
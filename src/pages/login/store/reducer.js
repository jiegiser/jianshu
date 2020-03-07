/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-06 08:40:56
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 16:00:43
 */
import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  login: false
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value)
    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value)
    default:
      return state
  }
}
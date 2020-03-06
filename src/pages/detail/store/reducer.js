/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-05 08:53:16
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-06 08:13:31
 */
import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  title: '',
  content: ''
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
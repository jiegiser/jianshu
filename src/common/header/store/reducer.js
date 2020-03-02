/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 14:31:14
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 15:41:12
 */
import * as constants from './constants.js'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
})
  
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
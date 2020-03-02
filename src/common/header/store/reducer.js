/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 14:31:14
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 15:13:41
 */
import * as constants from './constants.js'
const defaultState = {
  focused: false
}
  
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}
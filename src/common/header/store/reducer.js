/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 14:31:14
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 20:42:27
 */
import * as constants from './constants.js'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list:[],
  page: 1,
  totalPage: 1
})
  
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      // immutable对象的set方法会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      // 下面的代码可以这样写：
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
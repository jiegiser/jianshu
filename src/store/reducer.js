/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:57:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 14:47:57
 */
import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store'
// 合并reducer
const reducer =  combineReducers({
  header: headerReducer
})
export default reducer
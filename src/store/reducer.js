/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:57:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 16:01:09
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
// 合并reducer--生成的数据内容就是immutable对象
const reducer = combineReducers({
  header: headerReducer
})
export default reducer
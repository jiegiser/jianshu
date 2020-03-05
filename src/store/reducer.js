/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:57:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 09:03:39
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store/index'
import { reducer as detailReducer } from '../pages/detail/store/index'
// 合并reducer--生成的数据内容就是immutable对象
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})
export default reducer
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:57:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 15:25:20
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store/index'
import { reducer as detailReducer } from '../pages/detail/store/index'
import { reducer as loginReducer } from '../pages/login/store'
// 合并reducer--生成的数据内容就是immutable对象
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})
export default reducer
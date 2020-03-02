/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:55:41
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 14:27:02
 */
import { createStore, compose } from 'redux'
import reducer from './reducer'
// redux-devtools工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers())

export default store
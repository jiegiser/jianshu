/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:55:41
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 17:07:08
 */
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// redux-devtools工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store
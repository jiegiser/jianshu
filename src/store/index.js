/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:55:41
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 13:56:21
 */
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)

export default store
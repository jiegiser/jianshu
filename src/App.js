/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 07:49:57
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 14:01:19
 */
import React, { Fragment } from 'react'
import { Globalstyle } from './style'
import { Globaliconfont } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <Fragment>
    {/* 将store数据提供给内部组件 */}
      <Provider store = { store }>
        <Globalstyle/>
        <Globaliconfont />
        <Header></Header>
      </Provider>
    </Fragment>
  )
}

export default App

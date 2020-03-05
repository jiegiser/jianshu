/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 07:49:57
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 08:27:10
 */
import React, { Fragment } from 'react'
import { Globalstyle } from './style'
import { Globaliconfont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import Home from './pages/home/index'
import Detail from './pages/detail'
function App() {
  return (
    <Fragment>
    {/* 将store数据提供给内部组件 */}
      <Provider store = { store }>
        <Globalstyle/>
        <Globaliconfont />
        <BrowserRouter>
          <div>
            <Header />
            <Route path = '/' exact component = { Home }></Route>
            <Route path = '/detail' exact component = { Detail }></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App

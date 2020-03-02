/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 07:49:57
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 10:51:32
 */
import React, { Fragment } from 'react'
import { Globalstyle } from './style'
import { Globaliconfont } from './statics/iconfont/iconfont'
import Header from './common/header/index'
function App() {
  return (
    <Fragment>
      <Globalstyle/>
      <Globaliconfont />
      <Header></Header>
    </Fragment>
  )
}

export default App

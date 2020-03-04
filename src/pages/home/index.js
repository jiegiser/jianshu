/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 07:55:58
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 19:34:40
 */
import React, { Component } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt="" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}
const mapDispatch = dispatch => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo()
      dispatch(action)
    }
  }
}
export default connect(null, mapDispatch)(Home)
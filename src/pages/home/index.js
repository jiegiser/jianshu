/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 07:55:58
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 08:11:08
 */
import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
// PureComponent自己做了shouldComponentUpdate的优化，提高性能
class Home extends PureComponent {
  handleScrollTop() {
    // 左侧0 底部0
    window.scrollTo(0, 0)
  }
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
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  // 在组件从 DOM 中移除之前立刻被调用， 组件销毁的时候也要将windows绑定的全局的事件去掉
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapState = state => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatch = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapState, mapDispatch)(Home)
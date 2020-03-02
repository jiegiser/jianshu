/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 08:39:25
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 18:13:06
 */
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  Search,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchIfoItem
} from './style'
class Header extends Component {
  getListArea(show) {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map(item => {
                return <SearchIfoItem key={ item }>{ item }</SearchIfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
           </NavItem>
          <SearchWrapper>
            <CSSTransition
              in = { this.props.focused }
              timeout = { 200 }
              classNames = "slide"
            >
              <NavSearch
                className = { this.props.focused ? 'focused' : '' }
                onFocus = { this.props.handleInputFocus }
                onBlur = { this.props.handleInputBlur }
              ></NavSearch>
            </CSSTransition>
            <Search className = { this.props.focused ? 'focused iconfont' : 'iconfont' }>&#xe624;</Search>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className="iconfont">&#xe615;</span>
            写文章
           </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
     )
  }
}
 const mapStateToProps = state => {
   return {
     focused: state.getIn(['header', 'focused']),
     list: state.getIn(['header', 'list'])
    //  focused: state.get('header').get('focused')
   }
 }
 const mapDispatchToProps = dispatch => {
   return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Header)
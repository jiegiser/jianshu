/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 08:39:25
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 14:17:06
 */
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  Search
} from './style'

const Header = props => {
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
            in = { props.focused }
            timeout = { 200 }
            classNames = "slide"
          >
            <NavSearch
              className = { props.focused ? 'focused' : '' }
              onFocus = { props.handleInputFocus }
              onBlur = { props.handleInputBlur }
            ></NavSearch>
          </CSSTransition>
          <Search className = { props.focused ? 'focused iconfont' : 'iconfont' }>&#xe624;</Search>
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

 const mapStateToProps = state => {
   return {
     focused: state.focused
   }
 }
 const mapDispatchToProps = dispatch => {
   return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Header)
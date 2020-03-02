/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 08:39:25
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 16:35:22
 */
import React from 'react'
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
const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchIfoItem>教育</SearchIfoItem>
          <SearchIfoItem>生活</SearchIfoItem>
          <SearchIfoItem>前端</SearchIfoItem>
          <SearchIfoItem>python</SearchIfoItem>
          <SearchIfoItem>java</SearchIfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}
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
          { getListArea(props.focused) }
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
     focused: state.getIn(['header', 'focused'])
    //  focused: state.get('header').get('focused')
   }
 }
 const mapDispatchToProps = dispatch => {
   return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Header)
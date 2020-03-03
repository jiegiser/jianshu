/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 08:39:25
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-03 08:06:26
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
    const { list, mouseIn, focused, page, totalPage, handleChangePage, handleMouseEnter, handleMouseLeave } = this.props
    // 将immutable类型的数据不能通过[]的方式获取数据，所以需要转换为普通的数组
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchIfoItem key={ newList[i] }>{ newList[i] }</SearchIfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter = { handleMouseEnter }
          onMouseLeave = { handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={ () => handleChangePage(page, totalPage, this.spinIcon) }
            >
              <span
                ref = { icon => { this.spinIcon = icon } }
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
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
              in = { focused }
              timeout = { 200 }
              classNames = "slide"
            >
              <NavSearch
                className = { focused ? 'focused' : '' }
                onFocus = { handleInputFocus }
                onBlur = { handleInputBlur }
              ></NavSearch>
            </CSSTransition>
            <Search className = { focused ? 'focused iconfont' : 'iconfont' }>&#xe624;</Search>
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
     list: state.getIn(['header', 'list']),
     page: state.getIn(['header', 'page']),
     mouseIn: state.getIn(['header', 'mouseIn']),
     totalPage: state.getIn(['header', 'totalPage'])
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
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = Number(spin.style.transform.replace(/[^0-9]/ig, ''))
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Header)
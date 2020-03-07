/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-06 08:36:37
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 15:54:27
 */
import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={input => { this.account = input }}/>
            <Input placeholder="密码" type="password" ref={input => { this.password = input }}/>
            <Button onClick={ () => { this.props.login(this.account, this.password) }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
const mapState = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
const mapDispatch = dispatch => {
  return {
    login(accountEle, passwordEle) {
      dispatch(actionCreators.login(accountEle.value, passwordEle.value))
    }
  }
}
export default connect(mapState, mapDispatch)(Login)
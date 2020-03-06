/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-06 08:36:37
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-06 08:53:22
 */
import React, { PureComponent } from 'react'
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
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号"/>
          <Input placeholder="密码"/>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}
const mapState = state => {
  return {
  }
}
const mapDispatch = dispatch => {
  return {
  }
}
export default connect(mapState, mapDispatch)(Login)
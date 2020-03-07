/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-07 16:06:20
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 16:18:50
 */
import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>写文章页面</div>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}
const mapState = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
export default connect(mapState, null)(Write)
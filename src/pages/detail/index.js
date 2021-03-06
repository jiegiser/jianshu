/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 07:57:25
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 16:43:07
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML = {{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    const { match }  = this.props
    this.props.getDetail(match.params.id)
  }
}
const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
const mapDispatch = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}
// withRouter包裹就是让包裹的组件有能力去获取router里面的内容
export default connect(mapState, mapDispatch)(withRouter(Detail))
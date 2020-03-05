/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 07:57:25
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 09:14:15
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
class Detail extends Component {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML = {{__html: content}} />
      </DetailWrapper>
    )
  }
}
const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
export default connect(mapState, null)(Detail)
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:15:49
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 09:04:36
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'
class Topic extends Component {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map(item => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-pic' src={item.get('imgUrl')} alt="" />
                { item.get('title') }
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const mapState = state => {
  return {
    list: state.get('home').get('topicList')
  }
}
export default connect(mapState, null)(Topic)
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:16:20
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 08:13:50
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'
class Recommend extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map(item => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapState = state => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}
export default connect(mapState, null)(Recommend)
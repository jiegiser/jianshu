/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:16:02
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-06 08:34:32
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={ () => {getMoreList(page)}}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = state => {
  return {
    // list: state.get('home').get('articleList')
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}
const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)
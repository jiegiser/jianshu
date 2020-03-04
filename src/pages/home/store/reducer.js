/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:39:20
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 19:41:38
 */
import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})
  
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList:  fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}
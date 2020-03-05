/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:39:20
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 08:03:19
 */
import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})
const chnageHomeData = (state, action) => {
  return state.merge({
    topicList:  fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}
const addArticleList = (state, action) => {
  return state.merge({
    articleList:  state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return chnageHomeData(state, action)
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
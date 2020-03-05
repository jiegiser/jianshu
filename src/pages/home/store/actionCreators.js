/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 19:30:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 07:51:39
 */
import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'
const changeHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}
const addHomeList = (result, nextPage) => {
  return {
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(result),
    nextPage
  }
}
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    }).catch(e => {
      console.log(e)
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    }).catch(e => {
      console.log(e)
    })
  }
}
export const toggleTopShow = show => {
  return {
    type: constants.TOGGLE_SCROLL_TOP,
    show
  }
}
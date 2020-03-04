/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 19:30:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 19:40:30
 */
import axios from 'axios'
import * as constants from './constants'
const changeHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
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
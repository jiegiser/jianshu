/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-05 08:52:47
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-06 08:25:30
 */
import axios from 'axios'
import * as constants from './constants'
const changeDetail = (title, content) => {
  return {
    type: constants.CHANGE_DETAIL,
    title,
    content
  }
}
export const getDetail = id => {
  return dispatch => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content))
    }).catch(e => {
      console.log(e)
    })
  }
}
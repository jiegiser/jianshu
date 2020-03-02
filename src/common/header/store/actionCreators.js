/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 14:51:45
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 17:35:42
 */
import * as constants from './constants.js'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: constants.SEARCH_BLUR
  }
}
const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data)
  }
}
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(e => {
      console.log(e)
    })
  }
}
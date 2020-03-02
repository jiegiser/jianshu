/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 14:51:45
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 20:37:06
 */
import * as constants from './constants.js'
import axios from 'axios'
import { fromJS } from 'immutable'
const changeList = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}
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
export const mouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  }
}
export const mouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE
  }
}
export const changePage = (page) => {
  return {
    type: constants.CHANGE_PAGE,
    page
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
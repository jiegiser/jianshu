/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-06 08:40:48
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 16:00:21
 */
import * as constants from './constants'
import axios from 'axios'
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})
export const login = (account, password) => {
  return (dispatch) => {
    axios.get(
      '/api/login.json?account=' + account + '&password=' + password
    ).then(res => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      } else {
        
      }
    })
  }
}
export const logout = () => {
  return {
    type: constants.CHANGE_LOGOUT,
    value: false 
  }
}
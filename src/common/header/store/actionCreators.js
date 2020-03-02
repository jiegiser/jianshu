/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 14:51:45
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 15:07:39
 */
import * as constants from './constants.js'
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
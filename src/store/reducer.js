/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 13:57:00
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 14:14:21
 */
const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state
}
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:39:20
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 08:59:00
 */
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/collections/images/1637734/crop1530147275909.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp'
  }]
})
  
export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
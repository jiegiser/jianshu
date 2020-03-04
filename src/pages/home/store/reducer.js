/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:39:20
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 18:29:57
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
  }],
  articleList: [{
    id: 1,
    title: '我把老公的微信电话拉黑了',
    desc: '因为疫情的影响已经自己一个人上班生活有半个月了，自己去买菜自己做饭，自己搞卫生。生活渐渐的只有我自己了，慢慢的习惯了没有他们的存在。 去年的时候...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/7289752-fd4e7ce646030ed6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '我把老公的微信电话拉黑了',
    desc: '因为疫情的影响已经自己一个人上班生活有半个月了，自己去买菜自己做饭，自己搞卫生。生活渐渐的只有我自己了，慢慢的习惯了没有他们的存在。 去年的时候...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/7289752-fd4e7ce646030ed6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '我把老公的微信电话拉黑了',
    desc: '因为疫情的影响已经自己一个人上班生活有半个月了，自己去买菜自己做饭，自己搞卫生。生活渐渐的只有我自己了，慢慢的习惯了没有他们的存在。 去年的时候...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/7289752-fd4e7ce646030ed6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '我把老公的微信电话拉黑了',
    desc: '因为疫情的影响已经自己一个人上班生活有半个月了，自己去买菜自己做饭，自己搞卫生。生活渐渐的只有我自己了，慢慢的习惯了没有他们的存在。 去年的时候...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/7289752-fd4e7ce646030ed6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
})
  
export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:16:33
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 15:10:09
 */
import React, { PureComponent } from 'react'
import {
  WriterWrapper,
  WriterHot,
  WriterSwitch,
  WriterItem,
  WriterItemRight,
  WriteStar,
  WriterMore
} from '../style'
class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterHot>
          推荐作者
          <WriterSwitch>
            <span className="iconfont">&#xe851;</span>
            换一批
          </WriterSwitch>
        </WriterHot>
        <WriterItem>
          <img alt="" src="https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
          <WriteStar>关注</WriteStar>
          <WriterItemRight>
            <p className="title">简书钻首席小管家</p>
            <p className="desc">写了291.1k字 · 164.9k喜欢</p>
          </WriterItemRight>
        </WriterItem>
        <WriterItem>
          <img alt="" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
          <WriteStar>关注</WriteStar>
          <WriterItemRight>
            <p className="title">董克平日记</p>
            <p className="desc">写了869.8k字 · 3k喜欢</p>
          </WriterItemRight>
        </WriterItem>
        <WriterItem>
          <img alt="" src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
          <WriteStar>关注</WriteStar>
          <WriterItemRight>
            <p className="title">卢璐说</p>
            <p className="desc">写了869.8k字 · 3k喜欢</p>
          </WriterItemRight>
        </WriterItem>
        <WriterItem>
          <img alt="" src="https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
          <WriteStar>关注</WriteStar>
          <WriterItemRight>
            <p className="title">柯南</p>
            <p className="desc">写了869.8k字 · 3k喜欢</p>
          </WriterItemRight>
        </WriterItem>
        <WriterItem>
          <img alt="" src="https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
          <WriteStar>关注</WriteStar>
          <WriterItemRight>
            <p className="title">jiegiser</p>
            <p className="desc">写了869.8k字 · 3k喜欢</p>
          </WriterItemRight>
        </WriterItem>
        <WriterMore>查看全部</WriterMore>
      </WriterWrapper>
    )
  }
}

export default Writer
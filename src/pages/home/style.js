/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:02:51
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-04 08:37:11
 */
import styled from 'styled-components'
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden; /* 触发bfc让他的高度可以自动适应内部的高度 */
  padding: 20px 0 10px 0;
  margin-left: -18px;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
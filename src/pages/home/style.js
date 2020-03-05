/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-04 08:02:51
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-05 15:17:06
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
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden; /* 触发bfc让他的高度可以自动适应内部的高度 */
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
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
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div`
  position: relative;
  width: 278px;
  height: 300px;
  ${'' /* border: 1px solid #dcdcdc; */}
  border-radius: 3px;
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`
export const DownloadWrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 83%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  position: relative;
  img {
    width: 60px;
    height: 60px;
    opacity: .85;
  }
`
export const DowmloadDesc = styled.div`
  display: inline-block;
  position: absolute;
  margin-top: 15px;
  margin-left: 20px;
  box-sizing: border-box;
  .up {
    font-size: 15px;
    color: #333;
  }
  .down {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
export const WriterHot = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: #969696;
`
export const WriterSwitch = styled.div`
  float: right;
  olor: #787878;
`
export const WriterItem = styled.div`
  width: 100%;
  margin: 15px 0px;
  overflow: hidden;
  img {
    float: left;
    display: block;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
`
export const WriterItemRight = styled.div`
  padding-left: 76px;
  .title {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    color: #333;
  }
  .desc {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`
export const WriteStar = styled.div`
  float: right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  font-weight: 400;
  line-height: normal;
`
export const WriterMore = styled.div`
  width: 93%;
  text-align: center;
  position: absolute;
  padding: 7px 7px 7px 12px;
  left: 0;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
`
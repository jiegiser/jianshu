/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-05 13:58:59
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-06 08:17:07
 */
import React from 'react'
import {
  DownloadWrapper,
  DowmloadDesc
} from '../style'
const Download = () => {
  return (
    <DownloadWrapper>
      <img alt="" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
      <DowmloadDesc>
        <div className="up">下载简书手机App</div>
        <div className="down">随时随地发现和创作内容</div>
      </DowmloadDesc>
    </DownloadWrapper>
  )
}
export default Download
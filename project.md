<!--
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 08:00:59
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 13:54:57
 -->
## styled-components
使用styled-components去管理项目中的样式。
首先需要进行安装：yarn add styled-components。

> 需要注意的是injectGlobal方法已经被弃用。

全局引用样式：
```js
// 新建一个style.js文件
import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
// 在根组件中使用就可以了
import React, { Fragment } from 'react'
import { Globalstyle } from './style'
function App() {
  return (
    <Fragment>
      <Globalstyle/>
    </Fragment>
  )
}

export default App
```
局部样式文件的使用：
```js
// 定义style.js
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
 height: 56px;
 background: red;
`
```
在组件中使用：
```js
import React, { Component } from 'react'
import {
  HeaderWrapper
} from './style'
 class Header extends Component {
   render() {
     return (
       <HeaderWrapper>Header</HeaderWrapper>
      )
   }
 }
 export default Header
```
引入图片：
```js
import logoPic from '../../statics/logo.png'
export const Logo = styled.a`
  background: url(${logoPic});
  background-size: contain;
`
```
可以直接在样式文件中定义属性：
```js
export const Logo = styled.a.attrs({
  href: '/'
})`
  background: url(${logoPic});
  background-size: contain;
`
```

## css相关
一般我们进行定位的时候，将子元素定位在父元素中一定的位置。首先应该将父元素的position设置为相对定位（relative），然后进行设置子元素的position为absolute，然后进行设置top，left等等。如果子元素为内敛元素需要设置display为block然后设置宽高。
如果一个元素的背景设置了一张图片，需要图片进行按照元素的大小进行显示，需要设置：background-size: contain;
```css
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
```
如果我们设置一个元素的margin还有设置了他的宽，这样他的实际的宽度就是width加上左右margin值，我们可以使用box-sizing进行设置将边框和内边距放入框中：
设置为border-box就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
```js
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  box-sizing: border-box;
  padding: 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
`
```
float触发了bfc
项目中使用redux，react-redux进行管理数据；
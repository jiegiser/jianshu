<!--
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 08:00:59
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 16:05:44
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
可以在组件中传递参数到样式文件中：
```js
<RecommendItem imgUrl={item.get('imgUrl')}></RecommendItem>
// 样式文件中接收
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
```
类似Vue的v-html：
```js
<Content dangerouslySetInnerHTML = {{__html: content}} />
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
float触发了bfc。
一般我们设置了子元素的浮动，可以设置父元素overflow为hidden，这样可以撑开父元素。

## combineReducers合并reducer
项目中使用redux，react-redux进行管理数据；使用combineReducers函数进行合并不同的reducer。
```js
import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store'
// 合并reducer
const reducer = combineReducers({
  header: headerReducer
})
export default reducer
```
然后我们在项目中使用的时候，需要添加一个header前缀：
```js
 const mapStateToProps = state => {
   return {
     focused: state.header.focused
   }
 }
```

## 使用immutable.js库
我们在reducer中不能修改store中的状态。我们可以使用immutable.js库，会生成immutable对象，是不可修改的。
首先安装：yarn add immutable；使用：
```js
import * as constants from './constants.js'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
})
  
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === constants.CHANGE_LIST) {
    // return state.set('list', action.data).set('totalPage', action.totalPage)
    // 可以这样写
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
  }
  return state
}
```
在读取数据的时候，也是需要使用get来获取到数据：
```js
 const mapStateToProps = state => {
   return {
     focused: state.header.get('focused')
   }
 }
```
我们在获取值得时候state.header.get('focused')这样的方式进行获取，前面state是一个对象，后面又是以immutable对象的方式获取数据，这样
获取数据的方式不一致，我们可以将state整个变成一个immutable对象，这样获取数据的方式就统一起来了、我们可以借助redux-immutable库。
首先进行安装：yarn add redux-immutable;使用：
```js
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
// 合并reducer--生成的数据内容就是immutable对象
const reducer = combineReducers({
  header: headerReducer
})
export default reducer
```
然后在获取数据的时候：
```js
 const mapStateToProps = state => {
   return {
     focused: state.getIn(['header', 'focused'])
    //  下面的方式也是可以的
    //  focused: state.get('header').get('focused')
   }
 }
```
这里需要注意的是，如果我们使用了fromJS方法去将我们的对象变成immutable对象的时候，对象里面的数组也会变成immutable类型，如果直接改变数组的类型，会从immutable类型转换为普通的数据类型。所以在修改数组类型的时候，设置的数据类型也应该是immutable类型：
```js
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(e => {
      console.log(e)
    })
  }
}
// 然后在reducer中进行修改数据
  if (action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data)
  }
```
我们在使用ref的时候需要注意的是，ref是一个函数：spinIcon就是这个span的dom元素了。
```js
  <span
    ref = { icon => { this.spinIcon = icon } }
    className="iconfont spin"
  >
    &#xe851;
  </span>
```
## css 相关
我们如果想要点击某个按钮，让他的图标进行旋转：
```css
/* 首先定义图标的样式 */
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
```
然后通过js获取到该元素的dom进行修改transition:
```js
  let originAngle = Number(spin.style.transform.replace(/[^0-9]/ig, ''))
  spin.style.transform = `rotate(${originAngle + 360}deg)`
```

## React 中的路由

首先需要进行安装：yarn add react-router-dom，然后在根组件中进行使用：
```js
import React, { Fragment } from 'react'
import { Globalstyle } from './style'
import { Globaliconfont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div>
          // exact 参数是代表当访问的的地址跟path一直的时候进行显示，比如下面的两个path，如果不进行设置在/detail路径下/里面的内容也会显示
          <Route path = '/' exact render = { () => <div>home</div> }></Route>
          <Route path = '/detail' exact render = { () => <div>detail</div> }></Route>
        </div>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
```
如果我们想在对象的路由直接渲染我们的组件：
```js
import Home from './pages/home/index'
import Detail from './pages/detail'
function App() {
  return (
    <Fragment>
    {/* 将store数据提供给内部组件 */}
      <Provider store = { store }>
        <div>
          <BrowserRouter>
            <div>
              <Route path = '/' exact component = { Home }></Route>
              <Route path = '/detail' exact component = { Detail }></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </Fragment>
  )
}

export default App
```
我们在Windows绑定的全局的事件需要在组件要被销毁的时候进行移除：
```js
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  // 在组件从 DOM 中移除之前立刻被调用， 组件销毁的时候也要将windows绑定的全局的事件去掉
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
```
在react中如果使用a标点做页面切换，会导致重新加载整个页面。可以使用react-router-dom
提供的Link组件来实现。
```js
import { Link } from 'react-router-dom'
return (
  <Link key={index} to='/detail'>
  </Link>
)
```
需要注意的是这个理由跳转的组件需要放在根组件中BrowserRouter之中：
```js
import React, { Fragment } from 'react'
import { Globalstyle } from './style'
import { Globaliconfont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import Home from './pages/home/index'
import Detail from './pages/detail'
function App() {
  return (
    <Fragment>
    {/* 将store数据提供给内部组件 */}
      <Provider store = { store }>
        <Globalstyle/>
        <Globaliconfont />
        <BrowserRouter>
          <div>
            {
              // 这个组件我们使用了Link组件进行跳转，需要放在BrowserRouter组件中
            }
            <Header />
            <Route path = '/' exact component = { Home }></Route>
            <Route path = '/detail' exact component = { Detail }></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App
```

动态路由获取参数：
```js
// 首先在根路径设置匹配的模式：/detail/:id也就是匹配后面的id
<BrowserRouter>
  <div>
    <Header />
    <Route path = '/detail/:id' exact component = { Detail }></Route>
  </div>
</BrowserRouter>
```
然后在detail组件中可以接收到id：
```js
this.props.match.params.id
```
另一种方式是不修改根组件的路由：
```js
  <div>
    <Header />
    <Route path = '/detail' exact component = { Detail }></Route>
  </div>
```
然后在detail组件中可以接收到id：去解析。这样比较麻烦
```js
this.props.location.search
```

路由的跳转：用Redirect这个组件进行路由的跳转
```js
import { Redirect } from 'react-router-dom'
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={input => { this.account = input }}/>
            <Input placeholder="密码" type="password" ref={input => { this.password = input }}/>
            <Button onClick={ () => { this.props.login(this.account, this.password) }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
```
在项目中，不同的组件如果是要用不同的store里面的数据，需要引入对应的store里面的actioncreators。进行修改store里面的数据。

## 项目中性能的优化
- 使用无状态组件
- 使用PureComponent组件
使用PureComponent需要结合数据框架immutable.js来实现。
```js
import React, { PureComponent } from 'react'
// PureComponent自己做了shouldComponentUpdate的优化，提高性能
class Home extends PureComponent {}
```


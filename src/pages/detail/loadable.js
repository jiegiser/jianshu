/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-07 16:35:12
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-07 16:39:29
 */
import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  // 下面是异步加载的组件
  loader: () => import('./index.js'),
  // loading，加载时空白显示
  loading() {
    return <div>正在加载</div>
  }
});
export default () => <LoadableComponent/>
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>
//   }
// }
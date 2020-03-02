/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-03-02 07:49:57
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-03-02 08:24:43
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//引入框架文件
import 'antd-mobile/dist/antd-mobile.css';
//引入路由
import { HashRouter } from 'react-router-dom';
//引入静态资源文件
import './assets/css/reset.css';
import './assets/js/rem';
//配置axios
import axios from 'axios';
Component.prototype.$axios = axios;

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// 引入路由文件
import Register from './pages/register'
import Login from './pages/login'
class App extends Component {
	render() {
		return (
			<div>
				<Switch>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          
        </Switch>
			</div>
		);
	}
}
export default App;

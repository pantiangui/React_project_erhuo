import React, { Component } from 'react';
// import {render} from 'react-dom'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';//引入路由
import {connect} from 'react-redux';

// 返回引入history
import history from 'history/createHashHistory' 


// 引入组件

import {Header} from "./components/commons/Header"
import {Tabbar} from "./components/commons/Tabbar"

import {Home} from "./components/Home/Home"
import {Classify} from "./components/Classify/Classify"
import {Inform} from "./components/Inform/Inform"
import {Mine} from "./components/Mine/Mine"

import {Sell} from "./components/Issue/Sell"
import {Callback} from "./components/Issue/Callback"
import {MobileCallback} from "./components/Issue/MobileCallback"

import 'antd-mobile/dist/antd-mobile.css'//引入样式
import './sass/App.scss'


class App extends Component {
	constructor(){
		super();
		this.state={
			
		}
	}
	
	
	componentWillMount(){
		// display: inline;
	}
	
	render() {
		return (
		<div className="App">
		<Header/>
		<div id="content">
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/classify" component={Classify} />
				<Route path="/inform" component={Inform} />
				<Route path="/mine" component={Mine} />
				<Route path="/sell" component={Sell} />
				<Route path="/callback" component={Callback} />
				<Route path="/mobileCallback" component={MobileCallback} />
				<Redirect from="/" to="/home" exact/>
			</Switch>
        </div>
        
		<Tabbar/>
      </div>
    );
  }
}



//利用高阶组件传参
App=withRouter(App)

export default App;

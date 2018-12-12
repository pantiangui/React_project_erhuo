import React, { Component } from 'react';
// import {render} from 'react-dom'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';//引入路由
import {connect} from 'react-redux';
import axios from "axios";

// 返回引入history
import history from 'history/createHashHistory' 


// 引入组件

import {Header} from "./components/commons/Header"//头部
import {Tabbar} from "./components/commons/Tabbar"//底部导航栏
import {List} from "./components/commons/List"//列表页
import {Detail} from "./components/commons/Detail"//详情页

import {Insert} from "./components/Home/Insert"//首页
import {Home} from "./components/Home/Home"//首页
import {Classify} from "./components/Classify/Classify"//分类
import {Inform} from "./components/Inform/Inform"//消息
import {Mine} from "./components/Mine/Mine"//我的

import {Sell} from "./components/Issue/Sell"//出售闲置
import {Callback} from "./components/Issue/Callback"//我要收购
import {MobileCallback} from "./components/Issue/MobileCallback"//手机回收

import 'antd-mobile/dist/antd-mobile.css'//引入样式
import './sass/App.scss'

axios.defaults.baseURL="http://localhost:9090";

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
				<Route path="/insert" component={Insert} />
				<Route path="/home" component={Home} />
				<Route path="/classify" component={Classify} />
				<Route path="/inform" component={Inform} />
				<Route path="/mine" component={Mine} />
				<Route path="/list/:classify" component={List} />
				<Route path="/detail/:id" component={Detail} />
				<Route path="/sell" component={Sell} />
				<Route path="/callback" component={Callback} />
				<Route path="/mobileCallback" component={MobileCallback} />
				<Redirect from="/" to="/home" exact/>
				<Redirect to="/404"/>
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

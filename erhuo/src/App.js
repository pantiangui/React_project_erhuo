import React, { Component } from 'react';
// import {render} from 'react-dom'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';//引入路由


import {Tabbar} from "./components/commons/Tabbar"

import {Home} from "./components/Home/Home"
import {Classify} from "./components/Classify/Classify"
import {Issue} from "./components/Issue/Issue"
import {Inform} from "./components/Inform/Inform"
import {Mine} from "./components/Mine/Mine"

import 'antd-mobile/dist/antd-mobile.css'//引入样式
import './sass/App.scss'


class App extends Component {
  constructor(){
		super();
		this.state={
			
		}
	}
	


  render() {
    return (
      <div className="App">
		<div className="header">
			<i></i>
			<span>分类总览</span>
			<i></i>
		</div>
		
		<div id="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/classify" component={Classify} />
			<Route path="/issue" component={Issue} />
			<Route path="/inform" component={Inform} />
            <Route path="/mine" component={Mine} />
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

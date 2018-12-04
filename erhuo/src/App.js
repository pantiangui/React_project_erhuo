import React, { Component } from 'react';
// import {render} from 'react-dom'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';//引入路由
import {connect} from 'react-redux';

// 返回引入history
import history from 'history/createHashHistory' 
// import history from 'history/createBrowserHistory' 


import {Tabbar} from "./components/commons/Tabbar"

// 引入组件
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
	
	// 点击返回
	goBackClick(){
		window.history.back();
	}
	
	componentWillMount(){
		// display: inline;
	}
	
	render() {
		return (
		<div className="App">
		<div id="header" style={{display:this.props.headerInfo.headerStatus===true?"block":"none"}}>
			<div className="header">
				<p>
				<i className="iconfont icon-buoumaotubiao09 back" 
				onClick={this.goBackClick.bind(this)} 
				style={{display:this.props.headerInfo.headerIconStatus===true?"inline":"none"}}></i>
				{this.props.headerInfo.headertitle}
				<i className="iconfont icon-gengduo more" 
				style={{display:this.props.headerInfo.headerIconStatus===true?"inline":"none"}}></i>
				</p>
			</div>
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



let mapStateToProps = state=>{
    // 此处必须返回一个对象
    return {
        //把state.映射到props
       headerInfo:state.commonReducer.headerInfo,
    }
}

App = connect(mapStateToProps)(App);


//利用高阶组件传参
App=withRouter(App)

export default App;

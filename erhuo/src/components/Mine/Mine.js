import React,{Component} from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';



import {My} from "./My.js"
import {Login} from "./Login.js"
import {Reg} from "./Reg.js"

class Mine extends Component{
	render(){
		return (
			<div id="mine">
				<Route path="/mine/my" component={My} />
				<Route path="/mine/login" component={Login} />
				<Route path="/mine/reg" component={Reg} />
				<Redirect from="/" to="/mine/my" exact/>
			</div>
		)
	}
}


//利用高阶组件传参
Mine=withRouter(Mine)
export {Mine}
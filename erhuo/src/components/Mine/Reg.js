import React,{Component} from 'react';
import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';
import {Route,withRouter} from 'react-router-dom';

import '../../sass/reg.scss'
class Reg extends Component{
		constructor(){
			super();
			this.state={
				
			}
		}
		
		componentDidMount(){
			this.props.changeTabberStatus(false)
		}
		
		
		render(){
			return (
				<div id="reg">
				<div className="header">注册</div>
					<div className="login_box">
						<div className="input_box">
							<input type="text" placeholder="请输入用户名" id="username"/><br/>
							<span className="xian1"></span>
							<input type="text" placeholder="请输入密码" id="password"/><br/>
							<span className="xian2"></span>
							<input type="text" placeholder="请输入确认密码" id="password"/>
						</div>
						<a className="login_btn">注  册</a>
						<div className="to"><a className="right">已有账号? 登录</a></div>
					</div>
				</div>
			)
		}
	}
	
	
let mapStateToProps=state=>({
})
let mapDispatchToProps = dispatch=>{
	return {
		// 把changeTabbarStatus方法映射到props
		changeHeaderInfo(info){
			dispatch(headerInfo(info));
		},
		changeTabberStatus(status){
			dispatch(tabbar(status));
		}
	}
}
Reg = connect(mapStateToProps,mapDispatchToProps)(Reg);
Reg=withRouter(Reg)
export {Reg}
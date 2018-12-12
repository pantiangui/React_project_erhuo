import React,{Component} from 'react';
import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';
import {Route,withRouter} from 'react-router-dom';

import '../../sass/login.scss'
class Login extends Component{
	
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
			<div id="login">
				<p className="logo_icon"><a className="iconfont"><img src="./image/common_icon/logo.png"/></a></p>
				<div className="login_box">
					<div className="input_box">
						<input type="text" placeholder="请输入用户名" id="username"/><br/>
						<span></span>
						<input type="text" placeholder="请输入密码" id="password"/>
					</div>
					<a className="login_btn">登  录</a>
					<div className="to"><a>手机号注册</a><a className="right">忘记密码</a></div>
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
Login = connect(mapStateToProps,mapDispatchToProps)(Login);
Login=withRouter(Login)
export {Login}
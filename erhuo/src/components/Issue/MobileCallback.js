// 手机回收

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';

import '../../sass/mobileCallback.scss'

class MobileCallback extends Component{
	
	constructor(){
		super();
		this.state={
		}
	}
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"手机回收",
			headerIconStatus:true,
		});
		this.props.changeTabberStatus(false)
	}
	
	componentWillUnmount(){
		this.props.changeHeaderInfo({
			headerStatus:false,
			headertitle:"",
			headerIconStatus:true,
		});
		this.props.changeTabberStatus(true)
	}
	render(){
		return (
			<div id="mobileCallback">
				手机回收
			</div>
		)
	}
}

let mapStateToProps=state=>({
		//把state.映射到props
	// headerInfo:state.commonReducer.headerInfo,
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
MobileCallback = connect(mapStateToProps,mapDispatchToProps)(MobileCallback);


export {MobileCallback}




// 发布
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {tabbar} from '../../actions/index.js';


import '../../sass/issue.scss'

class Issue extends Component{
	
	constructor(){
		super();
		this.state={
			clientWidth:"",
			clientHeight:"",
			tabs:[
			],
			
		}
	}
	
	
	componentWillMount(){
		// this.props.changeTabbarStatus(false);
		let clientWidth=document.body.clientWidth;
		this.state.clientWidth=clientWidth;
		let clientHeight=document.body.clientHeight;
		this.state.clientHeight=clientHeight;
		
	}
	
	componentWillUnmount(){
		// this.props.changeTabbarStatus(true);
	}
	
	render(){
		return (
			<div id="issue" style={{width:this.state.clientWidth,
			height:this.state.clientHeight}}>
				发布
			</div>
		)
	}
}

let mapStateToProps=state=>({})
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeTabbarStatus方法映射到props
        changeTabbarStatus(status){
            dispatch(tabbar(status));
        }
    }
}
Issue = connect(mapStateToProps,mapDispatchToProps)(Issue);


export {Issue}
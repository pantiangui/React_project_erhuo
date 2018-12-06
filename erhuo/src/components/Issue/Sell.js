// 出售闲置

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo} from '../../actions/index.js';

import '../../sass/sell.scss'

class Sell extends Component{
	
	constructor(){
		super();
		this.state={
			
		}
	}
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"发布闲置",
			headerIconStatus:true,
		});
	}
	
	componentWillUnmount(){
		this.props.changeHeaderInfo({
			headerStatus:false,
			headertitle:"",
			headerIconStatus:true,
		});
	}
	render(){
		return (
			<div id="sell">
				<div className="title">
					<span>标题</span>
					<input type="text" placeholder="宝贝的品牌品类很重要哦" />
				</div>
				
				
				<div></div>
				<div></div>
				<div></div>
				<div></div>
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
		}
    }
}
Sell = connect(mapStateToProps,mapDispatchToProps)(Sell);


export {Sell}





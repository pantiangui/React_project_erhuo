import React,{Component} from 'react';

import {connect} from 'react-redux';
import {tabbar,headerInfo} from '../../actions/index.js';

import '../../sass/classify.scss'
import {ClassifyItem} from "./ClassifyItem.js"

class Classify extends Component{
	
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"分类总览",
			headerIconStatus:false,
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
			<div id="classify">
				<ClassifyItem/>
				
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
        changeTabbarStatus(status){
            dispatch(tabbar(status));
        },
		changeHeaderInfo(info){
			dispatch(headerInfo(info));
		}
    }
}
Classify = connect(mapStateToProps,mapDispatchToProps)(Classify);


export {Classify}
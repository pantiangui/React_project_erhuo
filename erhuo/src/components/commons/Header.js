import React, { Component } from 'react';
// import {render} from 'react-dom'
import {connect} from 'react-redux';

import '../../sass/header.scss'

class Header extends Component {
	
	// 点击返回
	goBackClick(){
		window.history.back();
	}
	
	render() {
		return (
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

Header = connect(mapStateToProps)(Header);


export {Header};

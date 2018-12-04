// 消息
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo} from '../../actions/index.js';

import '../../sass/inform.scss'

class Inform extends Component{
	
	constructor(){
		super();
		this.state={
			list:[
				{
					title:"私信",
					path:"",
					icon:"icon-message",
					hint:"暂无最新的私信消息"
				},
				{
					title:"留言消息",
					path:"",
					icon:"icon-liuyan2",
					hint:"暂无最新的留言消息"
				},
				{
					title:"订单信息",
					path:"",
					icon:"icon-info-1-copy",
					hint:"暂无最新的订单信息"
				},
				{
					title:"系统消息",
					path:"",
					icon:"icon-xitong",
					hint:"暂无最新的系统消息"
				},
				{
					title:"晒单分享",
					path:"",
					icon:"icon-icon--",
					hint:"看看大家都拿到了什么好消息"
				}
			],
			
		}
	}
	
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"消息",
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
			<div id="inform">
				<div className="notice">
					<i className="iconfont icon-gonggao notice_icon"></i>
					<span>发链接或二维码,引导加微信或QQ的都是骗子</span>
					<i className="iconfont icon-qianjin to"></i>
				</div>
				<div className="inform_list">
					<ul>
						<li></li>
					</ul>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}
}


let mapStateToProps=state=>({
		//把state.映射到props
	headerInfo:state.commonReducer.headerInfo,
})
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeTabbarStatus方法映射到props
		changeHeaderInfo(info){
			dispatch(headerInfo(info));
		}
    }
}
Inform = connect(mapStateToProps,mapDispatchToProps)(Inform);


export {Inform}
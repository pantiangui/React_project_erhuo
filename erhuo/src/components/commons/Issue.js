// 发布
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {issue} from '../../actions/index.js';


import '../../sass/issue.scss'

class Issue extends Component{
	
	constructor(){
		super();
		this.state={
			clientWidth:"",
			clientHeight:"",
			issue_item:[
				{
					title:"出售闲置",
					icon:"icon-box",
					path:""
				},
				{
					title:"手机回收",
					icon:"icon-phone",
					path:""
				},
				{
					title:"我要收购",
					icon:"icon-baoguo_huanbaohe_o",
					path:""
				}
			],
			
		}
	}
	
	// 关闭页面
	issueClick(){
		this.props.changeIssueStatus(false);
	}
	
	componentWillMount(){
		// 设置宽高
		let clientWidth=document.body.clientWidth;
		this.state.clientWidth=clientWidth;
		let clientHeight=document.body.clientHeight;
		this.state.clientHeight=clientHeight;
	}
	
	componentDidMount(){
	}
	
	render(){
		return (
			<div id="issue" 
			style={{width:this.state.clientWidth,
			height:this.state.clientHeight,
			display:this.props.issueStatus===true?"block":"none"}}>
				<div className="issue">
					<div className="issue_hint">
						<h4>发布技巧</h4>
						<p>发布商品时,描述要准确,分类明确,上传照片真实清晰这样才会有更多的人浏览询问,增加买卖的成功几率.</p>
						<div className="issue_notice">
							<i className="iconfont icon-gonggao notice_icon"></i>
							<span>发链接或二维码,引导加微信或QQ的都是骗子</span>
							<i className="iconfont icon-qianjin to"></i>
						</div>
					</div>
					<div className="issue_item">
						<ul>
							{
								this.state.issue_item.map((val,idx)=>(
									<li key={idx}>
										<a className={"iconfont "+val.icon}></a>
										<span>{val.title}</span>
									</li>
								))
							}
						</ul>
					</div>
				</div>
				<div className="add">
					<i className="iconfont icon-jia-tianchong" 
					onClick={this.issueClick.bind(this)}></i>
				</div>
				<div></div>
			</div>
		)
	}
}


let mapStateToProps=state=>(
{issueStatus:state.commonReducer.issueStatus})

let mapDispatchToProps = dispatch=>{
    return {
        // 把changeTabbarStatus方法映射到props
        changeIssueStatus(status){
            dispatch(issue(status));
        }
    }
}
Issue = connect(mapStateToProps,mapDispatchToProps)(Issue);


export {Issue}
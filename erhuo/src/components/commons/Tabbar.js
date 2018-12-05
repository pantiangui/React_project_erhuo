import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';//引入路由

import {connect} from 'react-redux';
import {issue} from '../../actions/index.js';


import '../../sass/tabbar.scss'
import {Issue} from "./Issue.js"

class Tabbar extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
				{
					title:"首页",
					path:"/home",
					icon:"icon-shouye"
				},
				{
					title:"分类",
					path:"/classify",
					icon:"icon-fenleigongnengleimu"
				},
				{
					title:"发布",
					path:"",
					icon:""
				},
				{
					title:"消息",
					path:"/inform",
					icon:"icon-xiaoxi"
				},
				{
					title:"我的",
					path:"/mine",
					icon:"icon-wo"
				}
			],
			selectedTab:0,
			issueStatus:false
		}
	}
	
	// 改变tabbar事件
	handlerClick(idx,path){
		if(idx!==2){
			this.setState({
				selectedTab:idx
			})
			this.props.history.push(path)
		}
	}
	
	// 弹出issue事件
	issueClick(){
		this.props.changeIssueStatus(true);
	}
	
	fn(){//状态函数
		//获取hash值
		// let hash = window.location.hash.slice(1);
		let hash = "/"+window.location.hash.split("/")[1];
		
		
		//找出对应索引值
		let selectedTab = 0
		// 用some遍历
		this.state.tabs.some((item,idx)=>{
			selectedTab = idx;
			return item.path === hash
		});
		// 改变constructor中的selectedTab的值
		this.setState({
			selectedTab
		});
		
	}
	
	
	componentWillMount(){
		this.fn()
		
	}
	
	componentWillReceiveProps(){
		this.fn()
	}
	
	
	
	
	render(){
		return (
			<div id="tabbar" className="tabbar_none" style={{display:this.props.tabbarStatus===true?"block":"none"}}>
				<Issue issueStatus={this.state.issueStatus} />
				<div className="tabbar">
					<ul>
					{
						this.state.tabs.map((tab,idx)=>(
							<li key={idx} onClick={this.handlerClick.bind(this,idx,tab.path)}>
								<p className="icon_box">
									<i className={"iconfont "+tab.icon}
									id={this.state.selectedTab===idx?"selectedTab":""}></i>
								</p>
								<p className="title">{tab.title}</p>
								<div className={idx!==2?"add add_none":"add"}>
									<i className="iconfont icon-jia-tianchong"
									onClick={this.issueClick.bind(this)}></i>
								</div>
							</li>
						)
					)}
					</ul>
				</div>
			</div>
			)
		}
}


let mapStateToProps = state=>{
    // 此处必须返回一个对象
    return {
        //把state.映射到props
        tabbarStatus:state.commonReducer.tabbarStatus,
    }
}

let mapDispatchToProps = dispatch=>{
    return {
        // 把方法映射到props
        changeIssueStatus(status){
            dispatch(issue(status));
        },
    }
}

Tabbar = connect(mapStateToProps,mapDispatchToProps)(Tabbar);

// 高阶组件
Tabbar=withRouter(Tabbar)

export {Tabbar}
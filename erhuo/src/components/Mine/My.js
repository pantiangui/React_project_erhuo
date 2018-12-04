import React,{Component} from 'react';

import '../../sass/mine.scss'
class My extends Component{
	
	constructor(){
		super();
		this.state={
			item:[
				{
					title:"购买订单",
					path:"",
					icon:"icon-gouwuche"
				},
				{
					title:"卖出订单",
					path:"",
					icon:"icon-gouwuchedianjihou01"
				},
				{
					title:"回收订单",
					path:"",
					icon:"icon-box"
				},
				{
					title:"我的账户",
					path:"",
					icon:"icon-zhanghuguanli"
				}
			],
			list:[
				{
					title:"我的发布",
					path:"",
					icon:"icon-fabu"
				},
				{
					title:"我的收藏",
					path:"",
					icon:"icon-collection"
				},
				{
					title:"我的红包",
					path:"",
					icon:"icon-hongbao"
				},
				{
					title:"我的足迹",
					path:"",
					icon:"icon-zuji"
				},
				{
					title:"报名中心",
					path:"",
					icon:"icon-kechengbaoming"
				},
				{
					title:"帮助中心",
					path:"",
					icon:"icon-bangzhu"
				},
				{
					title:"联系客服",
					path:"",
					icon:"icon-tubiao-"
				},
				{
					title:"叫快递",
					path:"",
					icon:"icon-kuaidi"
				}
			],
			
		}
	}
	
	render(){
		return (
			<div id="my">
				<div className="user_box">
					<div className="user_box_o"></div>
					<div className="user_box_box">
						<div className="user_icon_box">
							<a></a>
						</div>
						<a className="iconfont icon-shezhi setting"></a>
						<p>被驯服的象</p>
						<div className="user_box_attbox">
							<span className="guan">关注: 0</span>
							<i></i>
							<span className="fen">粉丝: 0</span>
						</div>
					</div>
				</div>
				
				<div className="content_item">
					<ul>
					{
						this.state.item.map((val,idx)=>(
							<li key={idx}>
								<i className={"iconfont "+val.icon}></i>
								<p>{val.title}</p>
							</li>
						)
					)}
					</ul>
				</div>
				
				<div className="content_list">
					<ul>
						{
							this.state.list.map((val,idx)=>(
								<li key={idx}>
									<i className={"iconfont "+val.icon+" content_list_icon"}></i>
									<span>{val.title}</span>
									<i className="iconfont icon-qianjin content_list_to"></i>
								</li>
							)
						)}
					</ul>
				</div>
				<div></div>
			</div>
		)
	}
}

export {My}
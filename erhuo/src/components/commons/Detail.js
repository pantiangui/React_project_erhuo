// 详情页

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';
import axios from 'axios';
import '../../sass/detail.scss'

class Detail extends Component{
	
		constructor(){
		super();
		this.state={
			goods_data:[]
		}
	}
	
	componentWillMount(){
		// 获取导航栏参数
		let id=this.props.match.params.id;
		axios.post('/erhuo/goods/detail',{
			id:id
		})
		.then(res => {
			this.setState({goods_data:res.data})
			console.log(res.data)
		})
		
	}
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"商品详情",
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
			<div id="callback">
				{
					this.state.goods_data.map((data,idx)=>(
						<div key={idx}>
							<div className="goods_info">
								<div className="goods_info_title">
									<p>{data.title}</p>
									<span>￥{data.price}</span>
									<del>原价 ￥{data.originalPrice}</del>
								</div>
								<div className="goods_info_place">
									<img src="./image/common_icon/place.png" />
									<span>{data.city.split("undefined")[0]}</span>
								</div>	
								<div className="goods_depict">
									<span>商品描述</span>
									<ul>
										{/* <li></li> */}
									</ul>
									<p>{data.itemDesc}</p>
								</div>
								<div className="goods_img">
									<ul>
										{
											data.pics.split(",").map((val,idx)=>(
												<li key={idx}><img src={"//img10.360buyimg.com/n1/s630x630_"+val} /></li>
											))
										}
									</ul>
								</div>
							</div>
							<div className="assure">
								<img src="./image/common_icon/assure.png"/>
								<span>请勿使用平台担保交易以外的担保交易方式</span>
								<i className="iconfont icon-qianjin to"></i>
							</div>
							<div className="user_stop">
								<div className="user_stop_title">
									<a><img src="./image/common_icon/user_icon.png"/></a>
									<span>旅行走失的猫</span>
								</div>
								<div className="user_stop_assess">
									<div className="user_stop_assess_left">
										<p>成功卖出<span>0</span>笔</p>
										<p>好评率<span>100%</span></p>
									</div>
									<div className="user_stop_assess_right">
										<ul>
											<li>
												<p>0</p>
												<p>好评</p>
											</li>
											<li>
												<p>0</p>
												<p>好评</p>
											</li>
											<li>
												<p>0</p>
												<p>好评</p>
											</li>
										</ul>
										<i className="iconfont icon-qianjin to"></i>
									</div>
								</div>
							</div>
							<div className="leave">
								<span>留言</span>
								<i className="leave_leave"></i>
								<span>0</span>
							</div>
							<div className="leave_list">
								<img src="./image/common_icon/leave.png"/>
							</div>
							<div id="handle">
								<div className="handle">
									<div className="handle_item">
										<ul>
											<li>
												<i className="iconfont icon-liuyan"></i>
												<p>留言</p>
											</li>
											<li>
												<i className="iconfont icon-liuyan1"></i>
												<p>私信</p>
											</li>
											<li>
												<i className="iconfont icon-shoucang"></i>
												<p>收藏</p>
											</li>
										</ul>
									</div>
									<div className="handle_submit">
										<a>我要买</a>
									</div>
								</div>
							</div>
						</div>
					))
				}
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
Detail = connect(mapStateToProps,mapDispatchToProps)(Detail);


export {Detail}

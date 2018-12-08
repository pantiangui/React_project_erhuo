// 详情页

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';

import '../../sass/detail.scss'

class Detail extends Component{
	
		constructor(){
		super();
		this.state={
		}
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
				<div className="goods_info">
					<div className="goods_info_title">
						<p>安卓数据快充线</p>
						<span>￥15</span>
						<del>原价￥25</del>
					</div>
					<div className="goods_info_place">
						<img src="./image/common_icon/place.png" />
						<span>广东省 广州市 天河区</span>
					</div>	
					<div className="goods_depict">
						<span>商品描述</span>
						<ul>
							<li>二手</li>
						</ul>
						<p>爱心包裹项目关爱贫困地区或灾区儿童，
							美术包让他们的童年不再是单调的黑白色，温暖包让他们的冬天不再瑟瑟发抖。
							100元1个美术包，200元1个温</p>
					</div>
					<div className="goods_img">
						<ul>
							<li><img src="./image/info_img/10100060003.jpg" /></li>
							<li><img src="./image/common_icon/notebook.jpg" /></li>
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

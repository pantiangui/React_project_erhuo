import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';//引入路由
import { Carousel, WingBlank } from 'antd-mobile';
import {connect} from 'react-redux';
import {homeContentIdx} from '../../actions/index.js';
import axios from 'axios';

import '../../sass/home.scss'

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			// 轮播图图片
			bannerImg:[],
			data: ['1', '2', '3'],
			imgHeight: 176,
			ward_title:[
				{
					icon:"官",
					title:"官方担保"
				},
				{
					icon:"审",
					title:"人工审核"
				},
				{
					icon:"鉴",
					title:"专业鉴定"
				},
				{
					icon:"保",
					title:"售后无忧"
				}
			],
			content_item:[
				{
					title:"新鲜发布",
				},
				{
					title:"附近的"
				}
			],
			info_img:[
				{
					img: '../../../public/img/info_img/10100060004.jpg'
				},
				{
					img: '../../../public/img/info_img/10100060004.jpg'
				},
				{
					img: '../../../public/img/info_img/10100060004.jpg'
				},
				{
					img: '../../../public/img/info_img/10100060004.jpg'
				}
			],
			content_data:[]
			
		}
	}
	
	
	
	// 列表切换按钮点击事件
	contentItemClick(idx){
		// 改变样式
		this.props.changeHomeContentIdx(idx)
		
		// 判断发送请求
		if(idx===0){
			axios.post('/erhuo/goods/goods_new')
			.then(res => {
				this.state.content_data=[];
				this.state.content_data.push(res.data);
			})
		}
		if(idx===1){
			axios.post('/erhuo/goods/goods_nearby',{
				address:"广州"
			})
			.then(ress => {
				this.state.content_data=[];
				this.state.content_data.push(ress.data);
			})
		}
	}
	
	// 进入列表页事件
	toClassifyListClick(classify){
		this.props.history.push("/list/"+classify)
	}
	
	//进入详情页
	toDetailClick(id){
		this.props.history.push("/detail/"+id)
	}
	
	componentWillMount() {
		axios.post('/erhuo/goods/goods_new')
			.then(res => {
				this.state.content_data=[];
				this.state.content_data.push(res.data);
			})
	}
	
	
	render(){
		// console.log(this.state.content_data[0])
		return (
			<div id="home">
				<div id="banner">
					<div className="banner">
							<Carousel className="space-carousel"
							  cellSpacing={10}
							  slideWidth={0.8}
							  autoplay
							  infinite
							  afterChange={index => this.setState({ slideIndex: index })}
							>
							  {this.state.data.map((val, index) => (
								<a
								  key={val}
								  href="#"
								  style={{
									display: 'block',
									position: 'relative',
									top:this.state.slideIndex === index ? -10 : 0,
									boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
								  }}
								>
								  <img
									src={require('../../static/banner_img/banner_2_1.png')}
									style={{ width: '100%',height:"3rem",verticalAlign: 'top' }}
									onLoad={() => {
									  window.dispatchEvent(new Event('resize'));
									}}
								  />
								</a>
							  ))}
							</Carousel>
					</div>
				</div>
				<div className="search">
					<a>搜索你的二货</a>
				</div>
				<div className="wards">
					<ul className="ward_title">
					{
						this.state.ward_title.map((tab,idx)=>(
							<li key={idx}>
								<span>{tab.icon}</span>
								<a>{tab.title}</a>
							</li>
						)
					)}
					</ul>
					<div className="wards_content">
						<div className="wards_content_top">
							<div className="wards_content_top_left">
							<a><img src={require('../../static/wards_img/wards_1.png')} /></a>
							</div>
							<div className="wards_content_top_right">
								<a><img src={require('../../static/wards_img/wards_2.png')} /></a>
								<a><img src={require('../../static/wards_img/wards_3.png')} /></a>
							</div>
						</div>
						<div className="wards_content_bottom">
							<a><img src={require('../../static/wards_img/wards_b1.png')} /></a>
							<a onClick={this.toClassifyListClick.bind(this,"tablet")}><img src={require('../../static/wards_img/wards_b2.png')} /></a>
							<a onClick={this.toClassifyListClick.bind(this,"notebook")}><img src={require('../../static/wards_img/wards_b3.png')} /></a>
						</div>
					</div>
					<div className="notice">
						<img src={require('../../static/wards_img/notice.png')} />
						<div className="notice_content">
							<Carousel className="my-carousel"
							  vertical
							  dots={false}
							  dragging={false}
							  swiping={false}
							  autoplay
							  infinite
							  speed={200}
							  autoplayInterval={3000}
							  resetAutoplay={false}
							>
							  {['欢迎来到二货APP~', '平台交易安全提醒'].map(type => (
								<div className="v-item" key={type}>{type}</div>
							  ))}
							</Carousel>
						</div>
					</div>
				</div>
				<div className="insu"></div>
				<div className="content">
					<div className="content_item">
						<ul>
							{
							this.state.content_item.map((tab,idx)=>(
									<li key={idx} onClick={this.contentItemClick.bind(this,idx)}>
										<a className={this.props.homeContentIdx===idx?"content_item_sel1":""}>{tab.title}</a>
										<i className={this.props.homeContentIdx===idx?"content_item_sel2":""}></i>
									</li>	
								)
							)}
						</ul>
					</div>
					
					{/* 首页-列表页 */}
					<div className="content_list">
						<ul>
							{
								this.state.content_data.map((data,idx)=>(
									data.map((data,idx)=>(
										<li key={idx} onClick={this.toDetailClick.bind(this,data._id)}>
											<div className="content_list_header">
												<a><img src="./image/common_icon/user_icon.png"/></a>
												<span>{data.nickname}</span>
											</div>
											<div className="content_list_img">
												<ul style={{width:(132*data.pics.split(",").length)}}>
													{
														data.pics.split(",").map((val,idx)=>(
															<li key={idx}><img src={"//img10.360buyimg.com/n1/s630x630_"+val} /></li>
														))
													}
												</ul>
											</div>
											<div className="content_list_title">
												<span>￥{data.price}</span>
										<del>原价￥{data.originalPrice}</del>
										<p>{data.title}</p>
											</div>
											<div className="content_list_place">
												<img src="./image/common_icon/place.png" />
												<span>{data.city.split("undefined")[0]}</span>
											</div>	
										</li>
									))
								))
							}
						</ul>
					</div>
				</div>
			</div>
			)
		}
}

let mapStateToProps=state=>({
		//把state.映射到props
	homeContentIdx:state.commonReducer.homeContentIdx,
})
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeTabbarStatus方法映射到props
		changeHomeContentIdx(info){
			dispatch(homeContentIdx(info));
		}
    }
}
Home = connect(mapStateToProps,mapDispatchToProps)(Home);


Home=withRouter(Home)

export {Home}
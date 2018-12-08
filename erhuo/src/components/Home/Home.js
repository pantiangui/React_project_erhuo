import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';//引入路由
import { Carousel, WingBlank } from 'antd-mobile';

import '../../sass/home.scss'

class Home extends Component{
	constructor(){
		super();
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
					title:"新鲜发布"
				},
				{
					title:"附近的"
				}
			],
			content_item_sel:0,
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
		}
	}
	
	
	
	// 列表切换按钮点击事件
	contentItemClick(idx){
		this.setState({
			content_item_sel:idx
		})
	}
	
	// 进入列表页事件
	toListClick(){
		this.props.history.push("/list")
	}
	
	componentWillMount() {
		
	}
	
	render(){
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
							<a onClick={this.toListClick.bind(this)}><img src={require('../../static/wards_img/wards_b1.png')} /></a>
							<a onClick={this.toListClick.bind(this)}><img src={require('../../static/wards_img/wards_b2.png')} /></a>
							<a onClick={this.toListClick.bind(this)}><img src={require('../../static/wards_img/wards_b3.png')} /></a>
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
										<a className={this.state.content_item_sel===idx?"content_item_sel1":""}>{tab.title}</a>
										<i className={this.state.content_item_sel===idx?"content_item_sel2":""}></i>
									</li>	
								)
							)}
						</ul>
					</div>
					
					{/* 首页-列表页 */}
					<div className="content_list">
						<ul>
							<li>
								<div className="content_list_header">
									<a><img src="./image/common_icon/user_icon.png"/></a>
									<span>二货优品</span>
								</div>
								<div className="content_list_img">
									<ul>
										{
											this.state.info_img.map((val,idx)=>(
												<li key={idx}><img src="./image/info_img/10100060003.jpg" /></li>
											))
										}
										{/* <li><img src={require('../../static/info_img/10100060003.jpg')}/></li>
										<li><img src={require('../../static/info_img/10100060003.jpg')}/></li>
										<li><img src={require('../../static/info_img/10100060003.jpg')}/></li>
										<li><img src={require('../../static/info_img/10100060003.jpg')}/></li> */}
									</ul>
								</div>
								<div className="content_list_title">
									<span>￥15</span>
									<del>原价￥25</del>
									<p>安卓数据快充线</p>
								</div>
								<div className="content_list_place">
									<img src="./image/common_icon/place.png" />
									<span>广东省 广州市 天河区</span>
								</div>	
							</li>
						</ul>
					</div>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			)
		}
}

Home=withRouter(Home)

export {Home}
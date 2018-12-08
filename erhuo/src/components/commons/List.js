// 列表页

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';

import '../../sass/list.scss'

class List extends Component{
	
		constructor(){
		super();
		this.state={
			info_img:[
				{
					img: 'info_img/10100060004.jpg'
				},
				{
					img: 'info_img/10100070001.jpg'
				},
				{
					img: 'info_img/10100080001.jpg'
				},
				{
					img: 'info_img/10100090002.jpg'
				}
			],
		}
	}
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"列表",
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
			<div id="list">
				<div className="banner">
					<img src="./image/common_icon/notebook.jpg" />
				</div>
				<div className="content">
					<ul>
						<li>
							<div className="content_list_header">
								<a><img src='./image/info_img/10100060003.jpg'/></a>
								<span>二货优品</span>
							</div>
							<div className="content_list_img">
								<ul>
									{
										this.state.info_img.map((val,idx)=>(
											<li key={idx}><img src={"./image/"+val.img} /></li>
										))
									}
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
						<li>
							<div className="content_list_header">
								<a><img src='./image/info_img/10100060003.jpg'/></a>
								<span>二货优品</span>
							</div>
							<div className="content_list_img">
								<ul>
									{
										this.state.info_img.map((val,idx)=>(
											<li key={idx}><img src={"./image/"+val.img} /></li>
										))
									}
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
				<div className="a"></div>
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
List = connect(mapStateToProps,mapDispatchToProps)(List);


export {List}
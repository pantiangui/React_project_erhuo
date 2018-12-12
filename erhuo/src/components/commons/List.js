// 列表页

import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';//引入路由
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
			goods_data:[],
			img_width:"",
			
		}
	}
	//进入详情页
	toDetailClick(id){
		this.props.history.push("/detail/"+id)
	}
	
	componentWillMount(){
		// 获取导航栏参数
		let classify=this.props.match.params.classify;
		if(classify.indexOf("_")!==-1){
			 classify= classify;
			// 二次分类发送axios
			axios.post('/erhuo/goods/goods_classify_list',{
				classify:classify
			})
			.then(res => {
				this.setState({goods_data:res.data})
			})
		}
		else{
			if(classify==='tablet'){
				classify="平板电脑";
			}
			else if(classify==='notebook'){
				classify="笔记本电脑";
			}
			// 以分类发送axios
			axios.post('/erhuo/goods/goods_classify',{
				classify:classify
			})
			.then(res => {
				this.setState({goods_data:res.data})
			})
		}
	}
	
	
	componentDidMount(){
		let classify=this.props.match.params.classify;
		let header="";//头部提示
		if(classify.indexOf("_")!==-1){
			header=classify;
		}
		else{
			if(classify==='tablet'){
				header="平板专区";
			}
			else if(classify==='notebook'){
				header="笔记本专区";
			}
		}
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:header,
			headerIconStatus:true,
		});
		// 改变底部状态
		this.props.changeTabberStatus(false)
	}
	
	componentWillUnmount(){
		// 恢复状态
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
						{this.state.goods_data==="空"?<div className="kong">空空如也!</div>:(
							this.state.goods_data.map((data,idx)=>(
								<li key={idx} onClick={this.toDetailClick.bind(this,data._id)}>
									<div className="content_list_header" >
										<a><img src='./image/common_icon/user_icon.png'/></a>
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
							)) )
						}
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

List=withRouter(List)
export {List}
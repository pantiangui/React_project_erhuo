// 出售闲置

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {headerInfo,tabbar} from '../../actions/index.js';

import '../../sass/sell.scss'

class Sell extends Component{
	
	constructor(){
		super();
		this.state={
			tag_list:["全新","二手","一口价","同城面交","可小刀","保期内","有小票","保真"]
		}
	}
	
	componentDidMount(){
		// 改变头部状态
		this.props.changeHeaderInfo({
			headerStatus:true,
			headertitle:"发布闲置",
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
			<div id="sell">
				<div className="title">
					<span>标题</span>
					<input type="text" placeholder="宝贝的品牌品类很重要哦" />
				</div>
				<div className="depict">
					<textarea placeholder="简述一下要发布的宝贝的类型、型号、规格等，描述的清晰度将会影响到交易的成功率"> 
					</textarea>
				</div>
				<div className="upload_img">
					<div className="upload_img_box">
						<ul className="img_list">
							<li><img src="https://img14.360buyimg.com/ppershou/jfs/t30373/164/979704201/18097/3cffcccd/5c03ea44N5cf8bc54.jpg" /></li>
							<li><img src="" /></li>
							<li><img src="" /></li>
							<li><img src="" /></li>
							<li><img src="" /></li>
							<li><img src="" /></li>
						</ul>
						<div className="img_check">
							<span className="cols"></span><span className="rows"></span>
						</div>
					</div>
				</div>
				<p className="upload_img_notice">上传3-9张图片,按照图片次序依次排列</p>
				<div className="place">
					<img src='./image/common_icon/place.png'/>
					<span>广东省 广州市 天河区</span>
				</div>
				<div className="price">
					<div className="selling">
						售价
						<input type="text" placeholder="出售价格" />
					</div>
					<div className="cost">
						原价
						<input type="text" placeholder="入手价格" />
					</div>
				</div>
				<div className="classify">
					分类
					<span>请选择分类</span>
					<i className="iconfont icon-qianjin to"></i>
				</div>
				<div className="tag">
					<p>请选择您的商品标签哦</p>
					<ul>
						{
							this.state.tag_list.map((val,idx)=>(
								<li key={idx}>{val}</li>
							))
						}
					</ul>
				</div>
				<div id="set_issue">
					<div className="set_issue">
						<a>发 布</a>
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
Sell = connect(mapStateToProps,mapDispatchToProps)(Sell);


export {Sell}





import React,{Component} from 'react';


import {connect} from 'react-redux';
import {classifyIndex} from '../../actions/index.js';

import '../../sass/classify.scss'


class ClassifyItem extends Component{
	constructor(){
		super();
		this.state={
			classify_item:[
				{
					title:"品牌手机",
					path:""
				},
				{
					title:"平板电脑",
					path:""
				},
				{
					title:"笔记本电脑",
					path:""
				},
				{
					title:"数码影音",
					path:""
				},
				{
					title:"电脑",
					path:""
				},
				{
					title:"数码相机",
					path:""
				},
				{
					title:"3C配件",
					path:""
				},
				{
					title:"智能设备",
					path:""
				},
			],
			
		}
	}
	
	// 点击事件
	itemClick(idx,path){
		this.setState({
			selectedItem:idx
		})
		this.props.changeClassifyIndex(idx)
	}
	
	
	componentDidMount() {
	}
	
	
	render(){
		return (
			<div id="classify_item">
				<ul>
				{
					this.state.classify_item.map((tab,idx)=>(
						<li key={idx} onClick={this.itemClick.bind(this,idx,tab.path)}>
							<i className={this.props.classifyIndex===idx?"selectedItem1":""}></i>
							<span className={this.props.classifyIndex===idx?"selectedItem2":""}>{tab.title}</span>
						</li>
					)
				)}
				</ul>
			</div>
		)
	}
}


let mapStateToProps=state=>({
		//把state.映射到props
	classifyIndex:state.commonReducer.classifyIndex,
})
let mapDispatchToProps = dispatch=>{
    return {
        // 把方法映射到props
		changeClassifyIndex(index){
			dispatch(classifyIndex(index));
		}
    }
}
ClassifyItem = connect(mapStateToProps,mapDispatchToProps)(ClassifyItem);


export {ClassifyItem}
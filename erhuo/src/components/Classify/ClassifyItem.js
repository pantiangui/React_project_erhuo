import React,{Component} from 'react';

import '../../sass/classify.scss'

class ClassifyItem extends Component{
	constructor(){
		super();
		this.state={
			client_H:"",
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
			selectedItem:0,
			
		}
	}
	
	// 点击事件
	itemClick(idx,path){
		this.setState({
			selectedItem:idx
		})
		// this.props.history.push(path)
	}
	
	
	componentWillMount() {
		let client_h=document.body.clientHeight;
		this.state.client_H=client_h
		// console.log(this.state.client_H)
	}
	
	
	 // style={{height:this.state.client_H}}
	render(){
		return (
			<div id="classify_item">
				<ul>
				{
					this.state.classify_item.map((tab,idx)=>(
							<li key={idx} onClick={this.itemClick.bind(this,idx,tab.path)}>
								<i className={this.state.selectedItem===idx?"selectedItem1":""}></i>
								<span className={this.state.selectedItem===idx?"selectedItem2":""}>{tab.title}</span>
							</li>
					)
				)}
				</ul>
			</div>
		)
	}
}

export {ClassifyItem}
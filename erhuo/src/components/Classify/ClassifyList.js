import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {classifyIndex} from '../../actions/index.js';

import '../../sass/classify.scss'

class ClassifyList extends Component{
	
	toClassifyListClick(classify){
		let data=this.props.classifyItem[this.props.classifyIndex]+"_"+classify
		this.props.history.push("/list/"+data)
	}
	
	render(){
		return (
			<div id="classify_list">
				<ul>
					{
						this.props.classifyList[this.props.classifyIndex].map((val,idx)=>(
							<li key={idx} onClick={this.toClassifyListClick.bind(this,val.title)}>
								<a><img src={"./image/classify01_icon/"+val.icon}/></a>
								<p>{val.title}</p>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}


let mapStateToProps=state=>({
		//把state.映射到props
	classifyIndex:state.commonReducer.classifyIndex,
	classifyList:state.classifyReducer.classifyList,
	classifyItem:state.classifyReducer.classifyItem
})
let mapDispatchToProps = dispatch=>{
    return {
        // 把方法映射到props
		changeClassifyIndex(index){
			dispatch(classifyIndex(index));
		}
    }
}
ClassifyList = connect(mapStateToProps,mapDispatchToProps)(ClassifyList);

ClassifyList=withRouter(ClassifyList)

export {ClassifyList}
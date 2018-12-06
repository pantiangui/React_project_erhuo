import React,{Component} from 'react';

import {connect} from 'react-redux';
import {classifyIndex} from '../../actions/index.js';

import '../../sass/classify.scss'

class ClassifyList extends Component{
	
	render(){
		return (
			<div id="classify_list">
				<ul>
					{
						this.props.aa[this.props.classifyIndex].map((val,idx)=>(
							<li key={idx}>
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
	aa:state.classifyReducer.classifyList
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


export {ClassifyList}
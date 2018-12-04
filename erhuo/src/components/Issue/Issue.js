// 发布
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {tabbar} from '../../actions/index.js';

class Issue extends Component{
	
	componentWillMount(){
		// this.props.changeTabbarStatus(false);
	}
	
	componentWillUnmount(){
		// this.props.changeTabbarStatus(true);
	}
	
	render(){
		return (<div id="issue">发布</div>)
		}
}

let mapStateToProps=state=>({})
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeTabbarStatus方法映射到props
        changeTabbarStatus(status){
            dispatch(tabbar(status));
        }
    }
}
Issue = connect(mapStateToProps,mapDispatchToProps)(Issue);


export {Issue}
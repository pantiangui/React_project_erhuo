let initState = {
    // 是否显示底部tab菜单
    tabbarStatus:true,
	
	// 头部信息状态
	headerInfo:{
		headerStatus:false,
		headertitle:"",
		headerIconStatus:true,
	},
	
	// 发布弹窗状态
	issueStatus:false,
	
	// 分类页下标
	classifyIndex:0,
	
}
let commonReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CHANGE_TABBAR_STATUS'://修改tabbar状态
            return {
                ...state,
                tabbarStatus:action.payload
            }
		case 'CHANGE_HEADER_INFO'://头部信息状态
			return {
				...state,
				headerInfo:action.payload
			}
		case 'CHANGE_ISSUE_STATUS'://发布弹窗状态
			return {
				...state,
				issueStatus:action.payload
			}
		case 'CHANGE_CLASSIFY_INDEX'://分类页下标
			return {
				...state,
				classifyIndex:action.payload
			}
        default:
            return state;
    }
}

export default commonReducer;

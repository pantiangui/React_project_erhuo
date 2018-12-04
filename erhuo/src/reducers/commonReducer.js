let initState = {
    // 是否显示底部tab菜单
    tabbarStatus:true,
	
	// 是否显示头部
	headerInfo:{
		headerStatus:false,
		headertitle:"",
		headerIconStatus:true,
	}
		
	
	
}
let commonReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CHANGE_TABBAR_STATUS':
            return {
                ...state,
                tabbarStatus:action.payload
            }
		case 'CHANGE_HEADER_INFO':
			return {
				...state,
				headerInfo:action.payload
			}
        default:
            return state;
    }
}

export default commonReducer;

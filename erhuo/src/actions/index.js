// 引入cart中的所有函数
// import * as cart from './cartActions';//{add,remove,change}
// 底部导航栏
export function tabbar(status){
    return {
        type:'CHANGE_TABBAR_STATUS',
        payload:status
    }
}

// 头部
export function headerInfo(info){
    return {
        type:'CHANGE_HEADER_INFO',
        payload:info
    }
}

// export {cart};

import React, { Component } from 'react';
import {render} from 'react-dom'
import {Route,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';//引入路由

import {TabBar} from 'antd-mobile';//引入框架


import {Home} from "./components/Home/Home"
import {Classify} from "./components/Classify/Classify"
import {Mine} from "./components/Mine/Mine"
// import "./css/page.css"
// import './sass/tab.scss'

import 'antd-mobile/dist/antd-mobile.css'//引入样式


 //引入字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faListUl,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

//注册图标
library.add(faHome,faListUl,faShoppingCart)


class App extends Component {
  constructor(){
		super();
		this.state={
			tabs:[
				{
					title:"首页",
					path:"/home",
					icon:"home"
				},
				{
					title:"分类",
					path:"/classify",
					icon:"list-ul"
				},
				{
					title:"我的",
					path:"/mine",
					icon:"shopping-cart"
				}
			],
			selectedTab:0
		}
	}
	
	handlerClick(idx,path){
		this.setState({
			selectedTab:idx
		})
		this.props.history.push(path)
	}
	
	// 生命周期
	componentWillMount(){
		//获取hash值
		let hash = window.location.hash.slice(1);

		//找出对应索引值
		let selectedTab = 0
		// 用some遍历
		this.state.tabs.some((item,idx)=>{
			selectedTab = idx;
			return item.path === hash
		});
		// 改变constructor中的selectedTab的值
		this.setState({
			selectedTab
		});
	}



  render() {
    return (
      <div className="App">
				<div id="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/classify" component={Classify} />
            <Route path="/mine" component={Mine} />
            <Redirect from="/" to="/home" exact/>
          </Switch>
        </div>
        
        <div id="tabs">
          <div id="tab">
            <TabBar>
            {
              this.state.tabs.map((tab,idx)=>{
                return <TabBar.Item
                  title={tab.title}
                  key={tab.path}
                  icon={<FontAwesomeIcon icon={tab.icon} />}
                  selectedIcon={<FontAwesomeIcon icon={tab.icon} />}
                  selected={this.state.selectedTab === idx}
                  onPress={this.handlerClick.bind(this,idx,tab.path)}
                  >
                  </TabBar.Item>
              })
            }
            </TabBar>
          </div>
        </div>
      </div>
    );
  }
}

//利用高阶组件传参
App=withRouter(App)

export default App;

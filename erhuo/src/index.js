import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import axios from 'axios';



import "./static/iconfont_tabbar/iconfont.css"
import "./static/iconfont_mine/iconfont.css"
import "./static/iconfont_inform/iconfont.css"
import "./static/iconfont_issue/iconfont.css"
import "./static/iconfont_detail/iconfont.css"
import './css/base.css'


import {HashRouter} from "react-router-dom"

import qs from 'qs';
axios.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data);
    return config;
}, function(error) {
    return Promise.reject(error);
});

render(
	 <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
	document.getElementById('root')
);

import React from 'react';
import {render} from 'react-dom';
import App from './App';

import "./static/iconfont_tabbar/iconfont.css"
import './css/base.css'


import {HashRouter} from "react-router-dom"

render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

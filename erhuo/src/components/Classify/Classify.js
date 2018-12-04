import React,{Component} from 'react';

import '../../sass/classify.scss'
import {ClassifyItem} from "./ClassifyItem.js"

class Classify extends Component{
	render(){
		return (
			<div id="classify">
				<ClassifyItem/>
				
			</div>
		)
	}
}

export {Classify}
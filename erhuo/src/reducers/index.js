import { combineReducers } from "redux";

import commonReducer from './commonReducer';
import classifyReducer from './classifyReducer';

let rootReducer = combineReducers({
	commonReducer,
	classifyReducer

});

export default rootReducer;

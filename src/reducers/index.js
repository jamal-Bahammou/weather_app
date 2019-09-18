import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import listReducer from './listReducer';

export default combineReducers({
	city: cityReducer,
	list: listReducer
});

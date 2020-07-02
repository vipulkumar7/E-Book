import { combineReducers } from 'redux';
import BookReducer from './BookReducers';

const rootReducer = combineReducers({
	bookReducer: BookReducer,
});

export default rootReducer;

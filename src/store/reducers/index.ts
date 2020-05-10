import counterReducer from './counterReducer';
import isLoggedReducer from './isLoggedReducer'
import apiReducer from './apiReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
    apiReducer,
});

export default allReducers;
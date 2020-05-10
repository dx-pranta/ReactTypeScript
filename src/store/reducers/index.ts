import counterReducer from './counterReducer';
import apiReducer from './apiReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    apiReducer,
});

export default allReducers;
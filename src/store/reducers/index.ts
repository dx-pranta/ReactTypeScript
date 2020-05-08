import counterReducer from './counterReducer';
import isLoggedReducer from './isLoggedReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
});

export default allReducers;
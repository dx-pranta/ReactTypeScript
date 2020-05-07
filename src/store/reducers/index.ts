import counterReducer from './counterReducer';
import isLoggedReducer from './isLoggedReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer,
});

export default allReducers;
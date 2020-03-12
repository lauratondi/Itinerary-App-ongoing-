import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import commentsReducer from './commentsReducer';
// import logoutReducer from './logoutReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    user: userReducer,
    login: loginReducer,
    comments: commentsReducer
    // logout: logoutReducer
});


export default rootReducer;
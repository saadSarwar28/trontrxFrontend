import { combineReducers } from 'redux'
import authReducers from './reducers/authReducers'
import homeReducers from './reducers/homeReducers'


const rootReducer = combineReducers({
    auth: authReducers,
    home: homeReducers
});

export default rootReducer
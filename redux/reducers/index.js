import { combineReducers } from 'redux';
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'

const rootReducers = combineReducers({
    cartReducer,
    loginReducer
});

export default rootReducers;
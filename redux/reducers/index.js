import { combineReducers } from 'redux';
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'
import managementReducer from './managementReducer'

const rootReducers = combineReducers({
    cartReducer,
    loginReducer,
    managementReducer
});

export default rootReducers;
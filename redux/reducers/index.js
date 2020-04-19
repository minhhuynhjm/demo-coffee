import { combineReducers } from 'redux';
import cartReducer from './cartReducer'

const rootReducers = combineReducers({
    cartReducer,
    // you can add more reducers here
});

export default rootReducers;
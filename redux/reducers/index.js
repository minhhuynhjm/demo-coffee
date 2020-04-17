import { combineReducers } from 'redux';
import cartReducer from './cartReducer'

const allReducers = combineReducers({
    cartReducer,
    // you can add more reducers here
});

export default allReducers;
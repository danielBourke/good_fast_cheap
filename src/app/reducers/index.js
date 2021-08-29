import { combineReducers } from 'redux';
import GFCReducer from './GFCReducer';

const rootReducer = combineReducers({
    gfc: GFCReducer,   
});

export default rootReducer;

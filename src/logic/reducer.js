
import { combineReducers } from "redux";

import tabReducer from './tab-bar/reducer';
import searchReducer from './search-field/reducer';

export default combineReducers({
    tabs: tabReducer,
    search: searchReducer
});
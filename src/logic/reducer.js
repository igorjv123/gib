
import { combineReducers } from "redux";

import tabReducer from './tab-bar/reducer';
import { linkChange, getData } from './search-field/reducer';

export default combineReducers({
    tabs: tabReducer,
    search: linkChange,
    data: getData
});
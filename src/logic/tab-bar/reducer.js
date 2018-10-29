import initialState from '../defaultState';
import {TAB_CHANGE} from './actionType';


function tabReducer(state = initialState, action) {
    switch (action.type) {
        case TAB_CHANGE:
            console.log(action)
            return { ...state, tabs: action.payload };
        default:
            return state;
    }
}

export default tabReducer;

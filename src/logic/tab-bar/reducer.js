import initialState from '../defaultState';
import {TAB_CHANGE} from './actionType';


function tabReducer(state = initialState, action) {
    switch (action.type) {
        case TAB_CHANGE:
            return { ...state, index: action.payload };
        default:
            return state;
    }
}

export default tabReducer;

import initialState from '../defaultState';
import {LINK_CHANGE} from './actionType';


function linkChange(state = initialState, action) {
    switch (action.type) {
        case LINK_CHANGE:
            console.log('REDUCER -> '+ action.payload)
            return { ...state, link: action.payload };
        default:
            return state;
    }
}

export default linkChange;

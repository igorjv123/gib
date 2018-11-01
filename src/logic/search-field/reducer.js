import initialState from '../defaultState';
import {LINK_PARSE_SUCCSES,
        FETCH_DATA_SUCCSES,
        FETCH_DATA_FAILED
} from './actionType';


export function linkChange(state = initialState, action) {
    switch (action.type) {
        case LINK_PARSE_SUCCSES:
            console.log('REDUCER -> '+ action.payload)
            return { ...state, link: action.payload };
        default:
            return state;
    }
}
export function getData(state = initialState, action){
    switch (action.type) {
        case FETCH_DATA_SUCCSES:
            console.log(action.payload)
            return{...state, mainInfo: action.payload}
        case FETCH_DATA_FAILED:
            return{...state, mainInfo: action.payload}
        default:
            return state;
    }
}


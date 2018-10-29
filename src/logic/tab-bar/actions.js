import {
    TAB_CHANGE
} from './actionType';

export const tabChange = (index) => ({
    type: TAB_CHANGE,
    payload: index
});
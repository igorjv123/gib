import {
    LINK_INPUT,
    FETCH_DATA
} from './actionType';

export const searchSubmit = (link) => ({
    type: FETCH_DATA,
    payload: link
});
export const linkInput = (link) => ({
    type: LINK_INPUT,
    payload: link
})
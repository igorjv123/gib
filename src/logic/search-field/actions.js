import {
    LINK_CHANGE
} from './actionType';

export const searchSubmit = (link) => ({
    type: LINK_CHANGE,
    payload: link
});
export const changeLink = (link) => ({
    type: LINK_CHANGE,
    payload: link
})
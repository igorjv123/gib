import { all, fork } from "redux-saga/effects";
import { getInfo,parseLink } from './search-field/saga'
export default function* rootSaga() {
    yield all([
        fork(getInfo),
        fork(parseLink)
    ]);
}
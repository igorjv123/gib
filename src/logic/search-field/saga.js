import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    FETCH_DATA,
    FETCH_DATA_SUCCSES,
    FETCH_DATA_FAILED,
    LINK_INPUT,
    LINK_PARSE_SUCCSES,
    LINK_PARSE_FAILED
} from './actionType';

function* getData(action) {
  try {
    const response = yield call(fetch, action.payload);
    const responseBody = yield response.json();
    yield put({
      type: FETCH_DATA_SUCCSES,
      payload: responseBody
    });
  } catch (err) {
    yield put({
      type: FETCH_DATA_FAILED,
      payload: err.message
    });
  }
}

function* linkParse(action){
  try{

    var parser = document.createElement('a');
    parser.href = action.payload;
    const link = `https://api.github.com/repos` + parser.pathname

    console.log(link)
    yield put ({
      type:LINK_PARSE_SUCCSES,
      payload:link
    })
  }
  catch(err){
    yield put({
      type: FETCH_DATA_FAILED,
      payload: err.message
    });
  }
}
// var parser = document.createElement('a');
// parser.href = "http://example.com:3000/pathname/?search=test#hash";

// parser.protocol; // => "http:"
// parser.hostname; // => "example.com"
// parser.port;     // => "3000"
// parser.pathname; // => "/pathname/"
// parser.search;   // => "?search=test"
// parser.hash;     // => "#hash"
// parser.host;     // => "example.com:3000"
export function* getInfo() {
  yield all([
    takeLatest(FETCH_DATA, getData)
  ])
}
export function* parseLink() {
  yield all([
    takeLatest(LINK_INPUT, linkParse)
  ])
}
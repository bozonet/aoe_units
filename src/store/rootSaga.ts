import { all, fork } from "redux-saga/effects";

import filterSaga from "./filter/sagas";

export function* rootSaga() {
  yield all([fork(filterSaga)]);
}
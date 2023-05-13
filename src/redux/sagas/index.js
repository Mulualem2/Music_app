import { all } from "redux-saga/effects";
import { watchMusicsAsync } from "./music";

export function* rootSaga() {
    yield all([
        watchMusicsAsync()
    ])
}
/* eslint-disable camelcase */
import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { handleAPIRequest } from "../../utils/http";
import { recommendYardApi } from "./api";

export function* searchYards({ payload = {} }) {
    yield call(handleAPIRequest, recommendYardApi, payload);
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SEARCH_YARDS, searchYards)
    ]);
}

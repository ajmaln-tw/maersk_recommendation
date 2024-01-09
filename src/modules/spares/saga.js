import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { handleAPIRequest } from "../../utils/http";
import { recommendSparesApi } from "./api";

export function* searchSpares({ payload = {} }) {
    yield call(handleAPIRequest, recommendSparesApi, payload);
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SEARCH_SPARES, searchSpares)
    ]);
}

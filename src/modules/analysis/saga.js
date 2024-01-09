import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { recommendVendorApi } from "./api";
import { handleAPIRequest } from "../../utils/http";


export function* searchVendor({ payload = {} }) {
    yield call(handleAPIRequest, recommendVendorApi, payload);
}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SEARCH_VENDOR, searchVendor)
    ]);
}

import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { spendAnalysisApi } from "./api";
import { handleAPIRequest } from "../../utils/http";


export function* spendAnalysisResultSaga({ payload = {} }) {
    yield call(handleAPIRequest, spendAnalysisApi, payload);
}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SPEND_ANALYSIS_RESULT, spendAnalysisResultSaga)
    ]);
}

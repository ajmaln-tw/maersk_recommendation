import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { spendAnalysisApi, trendAnalysisApi } from "./api";
import { handleAPIRequest } from "../../utils/http";


export function* spendAnalysisResultSaga({ payload = {} }) {
    yield call(handleAPIRequest, spendAnalysisApi, payload);
}

export function* trendAnalysisResultSaga({ payload = {} }) {
    yield call(handleAPIRequest, trendAnalysisApi, payload);
}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SPEND_ANALYSIS_RESULT, spendAnalysisResultSaga),
        takeLatest(ACTION_TYPES.TREND_ANALYSIS_RESULT, trendAnalysisResultSaga)
    ]);
}

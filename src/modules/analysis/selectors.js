import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const vesselRecommendation = (state) => state.vesselRecommendation.data;
export const getVesselRecommendation = flow(getState, vesselRecommendation);


const spendAnalysisForm = (state) => state.spendAnalysisForm;
export const getSpendAnalysisForm = flow(getState, spendAnalysisForm);


const trendAnalysisForm = (state) => state.trendAnalysisForm;
export const gettrendAnalysisForm = flow(getState, trendAnalysisForm);

const supplierAnalysisForm = (state) => state.supplierAnalysisForm;
export const getSupplierAnalysisForm = flow(getState, supplierAnalysisForm);


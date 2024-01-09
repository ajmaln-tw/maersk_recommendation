import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const vesselRecommendation = (state) => state.vesselRecommendation.data;
export const getVesselRecommendation = flow(getState, vesselRecommendation);


const spendAnalysisForm = (state) => state.spendAnalysisForm;
export const getSpendAnalysisForm = flow(getState, spendAnalysisForm);



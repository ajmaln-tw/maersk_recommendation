import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const yardRecommendation = (state) => state.yardRecommendation.data;
export const getYardRecommendation = flow(getState, yardRecommendation);

const vesselSubTypeDropDown = (state) => state.vesselSubTypeDropDown;
export const getVesselSubTypeDropDown = flow(getState, vesselSubTypeDropDown);

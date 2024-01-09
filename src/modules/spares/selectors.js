import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const sparesRecommendation = (state) => state.sparesRecommendation.data;
export const getSparesRecommendation = flow(getState, sparesRecommendation);

const equipmentDropDown = (state) => state.equipmentDropDown;
export const getEquipmentDropDown = flow(getState, equipmentDropDown);


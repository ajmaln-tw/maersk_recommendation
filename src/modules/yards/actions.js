import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {
    SEARCH_YARDS: `${STATE_REDUCER_KEY}/SEARCH_YARDS`,
    SEARCH_YARDS_REQUEST: `${STATE_REDUCER_KEY}/SEARCH_YARDS_REQUEST`,
    SEARCH_YARDS_SUCCESS: `${STATE_REDUCER_KEY}/SEARCH_YARDS_SUCCESS`,
    SEARCH_YARDS_FAILURE: `${STATE_REDUCER_KEY}/SEARCH_YARDS_FAILURE`

};

export const searchYard = createAction(ACTION_TYPES.SEARCH_YARDS);

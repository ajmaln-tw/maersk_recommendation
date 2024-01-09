/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
const initialState = {

    yardRecommendation: {
        requestInProgress: false,
        data: {
            Vessel_Type: "", Sub_Type: "", Length: 150, Breadth: 20, Depth: 20
        }
    },
    searchTerm: "",
    open: false,
    yardsRecommendationData: {
        requestInProgress: false,
        data: ""
    },
    vesselSubTypeDropDown: []

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setVesselTypeDropDown: (state, { payload = [] }) => {
            _.set(state, "vesselSubTypeDropDown", payload);
        },
        setSearchTerm: (state, { payload = "" }) => {
            _.set(state, "open", true);
            _.set(state, "searchResult.data", []);
            _.set(state, "searchTerm", payload);
        },
        setLoading: (state) => {
            _.set(state, "searchResult.requestInProgress", true);
        },
        setSuggestion: (state, { payload }) => {
            _.set(state, "searchResult.data", payload);
            _.set(state, "open", true);
            _.set(state, "searchResult.requestInProgress", false);
        },
        unsetLoading: (state) => {
            _.set(state, "searchResult.requestInProgress", false);
        },
        setOpenClose: (state) => {
            _.set(state, "open", !state.open);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.SEARCH_YARDS_REQUEST, (state) => {
                _.set(state, "yardsRecommendationData.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.SEARCH_YARDS_SUCCESS, (state, { payload: { best_yard } = {} }) => {
                _.set(state, "yardsRecommendationData.requestInProgress", false);
                _.set(state, "yardsRecommendationData.data", best_yard);
            })
            .addCase(ACTION_TYPES.SEARCH_YARDS_FAILURE, (state) => {
                _.set(state, "yardsRecommendationData.requestInProgress", false);
            });
    }

});

export const { actions, reducer } = slice;

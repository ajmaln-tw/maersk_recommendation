import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
const initialState = {

    vesselRecommendation: {
        requestInProgress: false,
        data: {
            delivery_port: "",
            item_code: ""
        }
    },
    searchTerm: "",
    open: false,
    table: {
        vesselRecommendation: {
            requestInProgress: false,
            data: []
        }
    },
    openSpend: false,
    spendAnalysis: {
        item_cat: "IMPA",
        item_sec1: "17 TABLEWARE & GALLEY UTENSILS",
        item_sec2: "CABIN CLEANING EQUIPMENT",
        item: "TOILET PLUNGER DIAM 160MM FOR JAPANESE STYLE"
    },
    impaDropDown: [{ id: "IMPA", name: "IMPA" }]

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setTableLoading: (state) => {
            _.set(state, "table.vesselRecommendation.requestInProgress", true);
        },
        unSetTableLoading: (state) => {
            _.set(state, "table.vesselRecommendation.requestInProgress", false);
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
            .addCase(ACTION_TYPES.SEARCH_VENDOR_REQUEST, (state) => {
                _.set(state, "table.vesselRecommendation.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.SEARCH_VENDOR_SUCCESS, (state, { payload }) => {
                _.set(state, "table.vesselRecommendation.requestInProgress", false);
                _.set(state, "table.vesselRecommendation.data", [payload]);
            })
            .addCase(ACTION_TYPES.SEARCH_VENDOR_FAILURE, (state) => {
                _.set(state, "table.vesselRecommendation.data", []);
                _.set(state, "table.vesselRecommendation.requestInProgress", false);
            });
    }

});

export const { actions, reducer } = slice;

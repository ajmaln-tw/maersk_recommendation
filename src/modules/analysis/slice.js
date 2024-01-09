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
    spendAnalysisForm: {
        item_cat: "",
        item_sec1: "",
        item_sec2: "",
        item: ""
    },
    openTrend: false,
    trendAnalysisForm: {
        item_cat: "",
        item_sec1: "",
        item_sec2: "",
        port: ""
    },
    openSupplier: false,
    supplierAnalysisForm: {
        vendor: ""
    },
    impaDropDown: [{ id: "IMPA", name: "IMPA" }],
    item_sec1DropDown: [{ id: "17 TABLEWARE & GALLEY UTENSILS", name: "17 TABLEWARE & GALLEY UTENSILS" }],
    item_sec2DropDown: [{ id: "CABIN CLEANING EQUIPMENT", name: "CABIN CLEANING EQUIPMENT" }],
    itemDropDown: [{ id: "TOILET PLUNGER DIAM 160MM FOR JAPANESE STYLE", name: "TOILET PLUNGER DIAM 160MM FOR JAPANESE STYLE" }],
    portDropDown: [{ id: "Bremerhaven", name: "Bremerhaven" }],
    vendorDropDown: [{ id: "Admiral Harding Limited", name: "Admiral Harding Limited" }]

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setOpenSpend: (state, { payload }) => {
            _.set(state, "openSpend", payload);
        },
        setOpenTrend: (state, { payload }) => {
            _.set(state, "openTrend", payload);
        },
        setOpenSupplier: (state, { payload }) => {
            _.set(state, "openSupplier", payload);
        },
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

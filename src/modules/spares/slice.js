import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
const initialState = {

    sparesRecommendation: {
        requestInProgress: false,
        data: {
            vessel_object_id: "",
            job_plan: "",
            equipment: ""
        }
    },
    searchTerm: "",
    open: false,
    table: {
        sparesRecommendation: {
            requestInProgress: false,
            data: []
        }
    },
    equipmentDropDown: []

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setEquipmentDropDown: (state, { payload = [] }) => {
            _.set(state, "equipmentDropDown", payload);
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
            .addCase(ACTION_TYPES.SEARCH_SPARES_REQUEST, (state) => {
                _.set(state, "table.sparesRecommendation.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.SEARCH_SPARES_SUCCESS, (state, { payload }) => {
                _.set(state, "table.sparesRecommendation.requestInProgress", false);
                _.set(state, "table.sparesRecommendation.data", payload);
            })
            .addCase(ACTION_TYPES.SEARCH_SPARES_FAILURE, (state) => {
                _.set(state, "table.sparesRecommendation.requestInProgress", false);
            });
    }

});

export const { actions, reducer } = slice;

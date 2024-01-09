import { createSlice } from "@reduxjs/toolkit";
// import { getPayloadContent } from "utils/apiUtils";
import { ACTION_TYPES as USER_ACTION_TYPES } from "../user-management/actions";
import { STATE_REDUCER_KEY } from "./constants";
import _ from "lodash";

const initialState = {
    user: {},
    navigator: {},
    table: {},
    drawerToggle: true,
    modulepath: ""

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setNavigator: (state, action) => {
            state.navigator = action.payload;
        },
        setUnsetDrawer: (state) => {
            state.drawerToggle = !state.drawerToggle;
        },
        setModulePath: (state, { payload = "" }) => {
            state.modulepath = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(USER_ACTION_TYPES.USER_PROFILE_SUCCESS, (state, { payload }) => {
                _.set(state, "user", payload);
            });
    }
});

export const { actions, reducer } = slice;

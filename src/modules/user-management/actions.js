import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {
    USER_PROFILE: `${STATE_REDUCER_KEY}/USER_PROFILE`,
    USER_PROFILE_REQUEST: `${STATE_REDUCER_KEY}/USER_PROFILE_REQUEST`,
    USER_PROFILE_SUCCESS: `${STATE_REDUCER_KEY}/USER_PROFILE_SUCCESS`,
    USER_PROFILE_FAILURE: `${STATE_REDUCER_KEY}/USER_PROFILE_FAILURE`,

    SIGN_UP: `${STATE_REDUCER_KEY}/SIGN_UP`,
    SIGN_UP_REQUEST: `${STATE_REDUCER_KEY}/SIGN_UP_REQUEST`,
    SIGN_UP_SUCCESS: `${STATE_REDUCER_KEY}/SIGN_UP_SUCCESS`,
    SIGN_UP_FAILURE: `${STATE_REDUCER_KEY}/SIGN_UP_FAILURE`,

    AUTHENTICATE_USER: `${STATE_REDUCER_KEY}/AUTHENTICATE_USER`,
    AUTHENTICATE_USER_REQUEST: `${STATE_REDUCER_KEY}/AUTHENTICATE_USER_REQUEST`,
    AUTHENTICATE_USER_SUCCESS: `${STATE_REDUCER_KEY}/AUTHENTICATE_USER_SUCCESS`,
    AUTHENTICATE_USER_FAILURE: `${STATE_REDUCER_KEY}/AUTHENTICATE_USER_FAILURE`


};

export const signUp = createAction(ACTION_TYPES.SIGN_UP);
export const signIn = createAction(ACTION_TYPES.AUTHENTICATE_USER);
export const fetchCurrentUser = createAction(ACTION_TYPES.USER_PROFILE);

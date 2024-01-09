import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const recommendYardApi = (data) => {
    return {
        url: API_URL.YARD.RECOMMEND,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.SEARCH_YARDS_REQUEST, ACTION_TYPES.SEARCH_YARDS_SUCCESS, ACTION_TYPES.SEARCH_YARDS_FAILURE],
            data
        }
    };
};

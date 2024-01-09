import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const recommendSparesApi = (data) => {
    return {
        url: API_URL.SPARES.RECOMMEND,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.SEARCH_SPARES_REQUEST, ACTION_TYPES.SEARCH_SPARES_SUCCESS, ACTION_TYPES.SEARCH_SPARES_FAILURE],
            data
        }
    };
};


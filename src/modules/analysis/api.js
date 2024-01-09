
// import { REQUEST_METHOD } from "../../common/constants";
// import { ACTION_TYPES } from "./actions";
// import { API_URL } from "./urls";
// import axios from "axios";

import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

//for testing
// const api = axios.create({
//     baseURL: "http://jsonplaceholder.typicode.com"
// })
// export const fetUserById = (data) => {
//     return {
//         url: API_URL.USER.FETCH_USER_BY_ID,
//         method: REQUEST_METHOD.GET,
//         payload: {
//             types: [ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, ACTION_TYPES.FETCH_USER_BY_ID_FAILURE],
//             data
//         }
//     };
// };


export const searchVendorApi = ({ portName, itemName } = {}) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_query?=${portName}&query?=${itemName}&_limit=${10}`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));

    });
};
export const recommendVendorApi = (data) => {
    return {
        url: API_URL.VENDOR.RECOMMEND,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.SEARCH_VENDOR_REQUEST, ACTION_TYPES.SEARCH_VENDOR_SUCCESS, ACTION_TYPES.SEARCH_VENDOR_FAILURE],
            data
        }
    };
};

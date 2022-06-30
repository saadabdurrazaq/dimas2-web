import axios from "axios";
import store from "@/store"
import router from "@/router"

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT, 
    // timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

httpClient.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        // check if it's a server error
        if (!error.response) {
            // notify.warn("Network/Server error");
            return Promise.reject(error);
        }

        // all the error responses
        switch (error.response.status) {
            case 422:
                store.dispatch('errorBag/setData', {
                    errors: error.response.data.errors,
                    message: error.response.data.message
                })
                break;
            case 403:
                store.dispatch('errorBag/setData', {
                    errors: null,
                    message: error.response.data.message
                })
                break;
            case 401: // authentication error, logout the user
                store.dispatch('errorBag/setData', {
                    errors: null,
                    message: error.response.data.message
                })
                store.dispatch('auth/logout')
                break;
            default:
        }

        return Promise.reject(error.response)
    }
);

export default httpClient;

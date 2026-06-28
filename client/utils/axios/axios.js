import axios from "axios";
import { ApiUrl } from "./apiUrl";
import { store } from "@/Folders/store/store";
import { setToken } from "@/Folders/store/features/auth";
import { messageCustom } from "../message/message";


export const axiosConfig = axios.create({
    baseURL: ApiUrl,
    withCredentials: true
})


axiosConfig.interceptors.response.use(
    res => res,
    async error => {
        const originalRequest = error.config;
        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {
                const fechRefresh = await fetch(`${ApiUrl}/account/refresh`, {
                    method: 'POST',
                    credentials: 'include'
                })


                const refreshResponse = await fechRefresh.json()


                const newAccess =
                    refreshResponse.token;

                store.dispatch(setToken(refreshResponse))
                originalRequest.headers.Authorization =
                    `Bearer ${newAccess}`;

                return axiosConfig(originalRequest);

            } catch {
                console.log('time out refreshtoken')
                store.dispatch(logout());
                messageCustom('توکن شما منقضی شده لطفا وارد شوید.', 'error', 7000)
                window.location.href =
                    "/login";
                return Promise.reject(error);
            }

        }


        // Network error
        // if (!error.response) {
        //     return Promise.reject({
        //         type: 'NETWORK_ERROR',
        //         original: error,
        //     });
        // }

        const { status, data } = error.response;
        return Promise.reject(error)
        // Error Validation Input

        // if (status === 301) {
        //     return Promise.reject({
        //         type: 'VALIDATION_ERROR_INPUT',
        //         status,
        //         data,
        //     });
        // }

        // Error Validation Input

        // if (status >= 500) {
        //     return Promise.reject({
        //         type: 'SERVER_ERROR',
        //         status,
        //         data,
        //     });
        // }

        // return Promise.reject({
        //     type: 'API_ERROR',
        //     status,
        //     data,
        // });
    }
);
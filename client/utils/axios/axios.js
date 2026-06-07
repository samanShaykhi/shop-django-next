import axios from "axios";
import { ApiUrl } from "./apiUrl";
import { useAppDispatch } from "@/Folders/store/hooks";
import { store } from "@/Folders/store/store";
import { setToken } from "@/Folders/store/features/auth";


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
                const dispatch = useAppDispatch()
                const refreshResponse =
                    await axiosConfig(
                        '/account/refresh',
                        { method: "POST" }
                    );

                const newAccess =
                    refreshResponse.data.token;

                store.dispatch(setToken(refreshResponse.data))

                originalRequest.headers.Authorization =
                    `Bearer ${newAccess}`;

                return axiosConfig(originalRequest);

            } catch {
                console.log('time out refreshtoken')
                // store.dispatch(logout());

                // window.location.href =
                //     "/login";

                // return Promise.reject(error);
            }

        }


        // Network error (سرور خاموش، timeout و غیره)
        if (!error.response) {
            return Promise.reject({
                type: 'NETWORK_ERROR',
                original: error,
            });
        }

        const { status, data } = error.response;

        // Error Validation Input

        if (status === 301) {
            return Promise.reject({
                type: 'VALIDATION_ERROR_INPUT',
                status,
                data,
            });
        }

        // Error Validation Input

        if (status >= 500) {
            return Promise.reject({
                type: 'SERVER_ERROR',
                status,
                data,
            });
        }

        // سایر ارورها (400, 404 و غیره)
        return Promise.reject({
            type: 'API_ERROR',
            status,
            data,
        });
    }
);
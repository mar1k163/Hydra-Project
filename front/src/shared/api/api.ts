import axios from "axios";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/const/localstorage";
export const $api = axios.create({
    baseURL: "http://158.160.157.98",
});

$api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || "";
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
});

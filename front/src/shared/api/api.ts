import axios from "axios";
export const $api = axios.create({
    baseURL: "",
});

$api.interceptors.request.use((config) => {
    return config;
});

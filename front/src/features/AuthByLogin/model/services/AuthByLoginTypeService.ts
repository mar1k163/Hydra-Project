import { $api } from "shared/api/api";
import { AuthByLoginProps } from "../types/AuthByLoginType";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/const/localstorage";

export const AuthByLoginService = async (props: AuthByLoginProps) => {
    const { login, password } = props;
    const params = {
        login: login,
        password: password,
    };

    const response = await $api.post("/auth/login", params);
    const token = response.data.token;
    window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
    return response;
};

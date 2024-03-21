import useAuthSelector from "entities/User/model/selectors/useAuthSelector";
import { Navigate, useLocation } from "react-router-dom";
import { RouterPath } from "shared/config/routerConfig/routerConfig";

export const AuthedRedirect = ({ children }: { children: JSX.Element }) => {
    const auth = useAuthSelector();
    const location = useLocation();
    const signinRoute = RouterPath.signin;
    const mainRoute = RouterPath.main;

    if (auth) {
        if (
            location.pathname === signinRoute ||
            location.pathname === mainRoute
        ) {
            return (
                <Navigate
                    to={RouterPath.dashboard}
                    state={{ from: location }}
                    replace
                />
            );
        }
    }

    return children;
};

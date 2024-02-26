import { ClientCardPage } from "pages/ClientCardPage";
import { DashboardPage } from "pages/DashboardPage";
import { MainPage } from "pages/MainPage";
import { SigninPage } from "pages/SigninPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = "main",
    SIGNIN = "signin",
    DASHBOARD = "dashboard",
    CLIENT = "client",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.SIGNIN]: "/signin",
    [AppRoutes.DASHBOARD]: "/dashboard",
    [AppRoutes.CLIENT]: "/dashboard/client/:id",
};

export const RoutesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.SIGNIN]: {
        path: RouterPath.signin,
        element: <SigninPage />,
    },
    [AppRoutes.DASHBOARD]: {
        path: RouterPath.dashboard,
        element: <DashboardPage />,
    },
    [AppRoutes.CLIENT]: {
        path: RouterPath.client,
        element: <ClientCardPage />,
    },
};

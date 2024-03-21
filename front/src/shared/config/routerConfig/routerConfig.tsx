import { ClientCardPage } from "pages/ClientCardPage";
import { CreateFoundationPage } from "pages/CreateFoundationPage";
import CreateFramePage from "pages/CreateFramePage/ui/CreateFramePage";
import { DashboardPage } from "pages/DashboardPage";
import { MainPage } from "pages/MainPage";
import { SigninPage } from "pages/SigninPage";
import { RouteProps } from "react-router-dom";

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
};
export enum AppRoutes {
    MAIN = "main",
    SIGNIN = "signin",
    DASHBOARD = "dashboard",
    CLIENT = "client",
    FOUNDATION = "foundation",
    FRAME = "frame",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.SIGNIN]: "/signin",
    [AppRoutes.DASHBOARD]: "/dashboard",
    [AppRoutes.CLIENT]: "/dashboard/client/:id",
    [AppRoutes.FOUNDATION]: "/dashboard/client/:id/foundation",
    [AppRoutes.FRAME]: "/dashboard/client/:id/frame",
};

export const RoutesConfig: Record<AppRoutes, AppRouterProps> = {
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
        authOnly: true,
    },
    [AppRoutes.CLIENT]: {
        path: RouterPath.client,
        element: <ClientCardPage />,
        authOnly: true,
    },
    [AppRoutes.FOUNDATION]: {
        path: RouterPath.foundation,
        element: <CreateFoundationPage />,
        authOnly: true,
    },
    [AppRoutes.FRAME]: {
        path: RouterPath.frame,
        element: <CreateFramePage />,
        authOnly: true,
    },
};

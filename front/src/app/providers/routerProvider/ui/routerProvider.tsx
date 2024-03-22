import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
    AppRouterProps,
    RoutesConfig,
} from "shared/config/routerConfig/routerConfig";
import { Layout } from "shared/Layouts/Layout/Layout";
import { PageLoader } from "widgets/PageLoader/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AuthedRedirect } from "./AuthedRedirect";
export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <Layout>{route.element}</Layout>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        <AuthedRedirect>{element}</AuthedRedirect>
                    )
                }
            />
        );
    }, []);
    return (
        <Routes>{Object.values(RoutesConfig).map(renderWithWrapper)}</Routes>
    );
};

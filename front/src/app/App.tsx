import React, { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
export const App = () => {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

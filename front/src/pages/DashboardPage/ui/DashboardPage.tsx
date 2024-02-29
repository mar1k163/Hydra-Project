import { ClientsContent } from "entities/Clients";
import React from "react";
import { Header } from "widgets/Header/Header";
import { Logo } from "widgets/Logo/Logo";
import { PageTitle } from "widgets/PageTitle/PageTitle";

export const DashboardPage = () => {
    return (
        <>
            <Header />
            <PageTitle />
            <ClientsContent />
        </>
    );
};
export default DashboardPage;

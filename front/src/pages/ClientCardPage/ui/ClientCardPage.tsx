import { ClientCardContent } from "entities/ClientCard";
import React from "react";
import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";

export const ClientCardPage = () => {
    return (
        <>
            <Header isClient={true} />
            <PageTitle title="Карточка клиента" />
            <ClientCardContent />
        </>
    );
};
export default ClientCardPage;

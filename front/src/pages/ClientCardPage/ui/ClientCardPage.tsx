// ClientCardPage.tsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";
import {
    UserContext,
    ClientContext,
} from "app/providers/userContext/userContext";
import { ClientCardContent } from "entities/ClientCard";

export const ClientCardPage = () => {
    const { id } = useParams();
    const [selectedClient, setSelectedClient] = useState(null);

    const Users = useContext(UserContext);

    const getClientById = (id) => {
        const numericId = parseInt(id, 10);
        const client = Users.find((client) => client.id === numericId);
        setSelectedClient(client);
    };

    useEffect(() => {
        getClientById(id);
    }, [id]);
    console.log(selectedClient);
    return (
        <ClientContext.Provider value={selectedClient}>
            <>
                <Header isClient={true} />
                <PageTitle title="Карточка клиента" url="/dashboard" />
                <ClientCardContent />
            </>
        </ClientContext.Provider>
    );
};

export default ClientCardPage;

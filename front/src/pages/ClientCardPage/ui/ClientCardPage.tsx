import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";
import { ClientCardContent } from "entities/ClientCard";

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

import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";

import { ClientCardContent } from "entities/ClientCard";
import { RouterPath } from "shared/config/routerConfig/routerConfig";

export const ClientCardPage = () => {
    return (
        <>
            <Header isClient={true} />
            <PageTitle title="Карточка клиента" route={RouterPath.dashboard} />
            <ClientCardContent />
        </>
    );
};

export default ClientCardPage;

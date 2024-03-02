import { ClientsContent } from "entities/Clients";
import { Header } from "widgets/Header/Header";
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

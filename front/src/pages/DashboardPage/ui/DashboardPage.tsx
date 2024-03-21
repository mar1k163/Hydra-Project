import { ClientsContent } from "entities/Clients";
import { useUserStore } from "entities/User/model/store/UserStore";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";

export const DashboardPage = () => {
    const user = useUserStore((state) => state.user);
    console.log(user);
    return (
        <>
            <Header isClient={false} />
            <PageTitle
                title="Клиенты"
                logout={true}
                route={RouterPath.signin}
            />
            <ClientsContent />
        </>
    );
};
export default DashboardPage;

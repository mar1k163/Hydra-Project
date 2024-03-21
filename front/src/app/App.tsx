import { useUserStore } from "entities/User/model/store/UserStore";
import { AppRouter } from "./providers/routerProvider";
import { useEffect } from "react";
export const App = () => {
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);
    const fetchUser = useUserStore((state) => state.fetchUser);
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);
    console.log(user);
    if (!isLoading) {
        return (
            <div className="app light">
                <main className="content">
                    <AppRouter />
                </main>
            </div>
        );
    }
};

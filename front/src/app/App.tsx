import { AppRouter } from "./providers/routerProvider";
export const App = () => {
    return (
        <div className="app light">
            <main className="content">
                <AppRouter />
            </main>
        </div>
    );
};

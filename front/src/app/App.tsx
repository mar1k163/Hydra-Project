import { AppRouter } from "./providers/routerProvider";
export const App = () => {
    return (
        <div className="app">
            <main className="content">
                <AppRouter />
            </main>
        </div>
    );
};

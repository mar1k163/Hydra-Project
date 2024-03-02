import ReactDOM from "react-dom/client";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import "app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

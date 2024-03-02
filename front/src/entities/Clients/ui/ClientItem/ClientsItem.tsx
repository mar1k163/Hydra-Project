import { useNavigate } from "react-router-dom";
import styles from "./ClientsItem.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const ClientsItem = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Переход по указанному URL
        navigate("/dashboard/client/123123");
    };
    return (
        <Button
            theme={ButtonTheme.CLIENTS_CARD}
            className={styles.client}
            onClick={handleNavigate}
        >
            <span>Иванов Иван Иванович</span>
        </Button>
    );
};

import { useNavigate } from "react-router-dom";
import styles from "./ClientsItem.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { IClient } from "entities/Clients/model/types/ClientsTypes";
export const ClientsItem = (props: IClient) => {
    const { id, name, otchestvo, familiya } = props;
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Переход по указанному URL
        navigate(`/dashboard/client/${id}`);
    };
    return (
        <Button
            theme={ButtonTheme.CLIENTS_CARD}
            className={styles.client}
            onClick={handleNavigate}
        >
            <span>
                {familiya} {name} {otchestvo}
            </span>
        </Button>
    );
};

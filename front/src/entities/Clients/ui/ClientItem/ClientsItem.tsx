import { useNavigate } from "react-router-dom";
import styles from "./ClientsItem.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Client } from "entities/Clients/model/types/ClientsTypes";
export const ClientsItem = (props: Client) => {
    const { id, firstname, secondname, lastname } = props;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/dashboard/client/${id}`);
    };
    return (
        <Button
            theme={ButtonTheme.CLIENTS_CARD}
            className={styles.client}
            onClick={handleNavigate}
        >
            <span>
                {firstname} {secondname} {lastname}
            </span>
        </Button>
    );
};

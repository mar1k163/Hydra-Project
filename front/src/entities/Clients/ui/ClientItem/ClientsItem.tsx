import styles from "./ClientsItem.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const ClientsItem = () => {
    return (
        <Button theme={ButtonTheme.CLIENTS_CARD} className={styles.client}>
            <span>Иванов Иван Иванович</span>
        </Button>
    );
};

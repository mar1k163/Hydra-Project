import React from "react";
import styles from "./ClientsContent.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ClientsItem } from "../ClientItem/ClientsItem";
export const ClientsContent = () => {
    return (
        <div className={styles.clients}>
            <Button
                theme={ButtonTheme.CREATE_CLIENT}
                className={styles.btn_create}
            >
                Создать клиента
            </Button>
            <div className={styles.clients_list}>
                <ClientsItem />
                <ClientsItem />
                <ClientsItem />
                <ClientsItem />
                <ClientsItem />
                <ClientsItem />
                <ClientsItem />
            </div>
        </div>
    );
};

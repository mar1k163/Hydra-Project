import React from "react";
import styles from "./ClientsItem.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const ClientsItem = () => {
    return (
        <Button theme={ButtonTheme.CLIENTS_CARD}>
            <span>Иванов Иван Иванович</span>
        </Button>
    );
};

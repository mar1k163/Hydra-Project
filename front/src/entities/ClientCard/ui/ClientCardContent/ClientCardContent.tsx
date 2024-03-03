import React from "react";
import styles from "./ClientCardContent.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ClientCardRaschet } from "../ClientCardRaschet/ClientCardRaschet";

export const ClientCardContent = () => {
    const test = [
        {
            raschet_n: 1,
            status: 0,
            date: "2024.03.03",
            address: "ул. Примерная, д. 123, кв. 45",
        },
        {
            raschet_n: 2,
            status: 1,
            date: "2024.03.04",
            address: "ул. Тестовая, д. 456, кв. 78",
        },
        {
            raschet_n: 3,
            status: 2,
            date: "2024.03.05",
            address: "ул. Образцовая, д. 789, кв. 12",
        },
        // Добавьте другие записи, если необходимо
    ];
    return (
        <div className={styles.clients}>
            <Button
                theme={ButtonTheme.CREATE_CLIENT}
                className={styles.btn_create}
            >
                Создать расчет
            </Button>
            <div className={styles.rascheti}>
                {test.map((ras) => (
                    <ClientCardRaschet
                        raschet_n={ras.raschet_n}
                        date={ras.date}
                        status={ras.status}
                        address={ras.address}
                    />
                ))}
            </div>
        </div>
    );
};

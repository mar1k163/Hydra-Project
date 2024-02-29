import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "widgets/Logo/Logo";
export const Header = () => {
    const isClient = false;
    return (
        <div className={styles.header}>
            <Logo width={350} height={150} />
            {isClient && (
                <div className={styles.client}>
                    <p className={styles.client_title}>Клиент:</p>
                    <div className={styles.client_info}>
                        <span className={styles.client_info_name}>
                            Тестовый Тест Тестович
                        </span>
                        <span className={styles.client_info_adress}>
                            г. Ульяновск, ул. Тестовая, д.35-45
                        </span>
                        <span className={styles.client_info_tel}>
                            тел. 8-900-000-00-00
                        </span>
                    </div>
                </div>
            )}
            <div className={styles.employee}>
                <span className={styles.employee_name}>Имя Фамилия</span>
                <span className={styles.employee_pos}>Должность</span>
            </div>
        </div>
    );
};

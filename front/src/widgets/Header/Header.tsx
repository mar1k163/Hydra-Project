import { useContext } from "react";
import styles from "./Header.module.scss";
import { Logo } from "widgets/Logo/Logo";
import { ClientContext } from "app/providers/userContext/userContext";

interface HeaderProps {
    isClient: boolean;
}
export const Header = (props: HeaderProps) => {
    const { isClient } = props;
    const Client = useContext(ClientContext);
    return (
        <>
            {Client !== null && (
                <div className={styles.header}>
                    <Logo width={350} height={150} />
                    {isClient && (
                        <div className={styles.client}>
                            <p className={styles.client_title}>Клиент:</p>
                            <div className={styles.client_info}>
                                <span className={styles.client_info_name}>
                                    {Client.familiya} {Client.name}{" "}
                                    {Client.otchestvo}
                                </span>
                                <span className={styles.client_info_adress}>
                                    {Client.address}
                                </span>
                                <span className={styles.client_info_tel}>
                                    {Client.phone}
                                </span>
                            </div>
                        </div>
                    )}
                    <div className={styles.employee}>
                        <span className={styles.employee_name}>
                            Имя Фамилия
                        </span>
                        <span className={styles.employee_pos}>Должность</span>
                    </div>
                </div>
            )}
        </>
    );
};

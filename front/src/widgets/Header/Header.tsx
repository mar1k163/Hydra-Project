import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Logo } from "widgets/Logo/Logo";
import { ClientContext } from "app/providers/userContext/userContext";
import { Modal } from "shared/ui/Modal/Modal";
import { EditClientForm } from "features/EditClient";

interface HeaderProps {
    isClient: boolean;
}
export const Header = (props: HeaderProps) => {
    const { isClient } = props;
    const Client = useContext(ClientContext);
    const [editClientOpened, setEditClientOpened] = React.useState(false);

    return (
        <>
            <div className={styles.header}>
                <Logo width={350} height={150} />
                {isClient && Client !== null && (
                    <>
                        <div
                            className={styles.client}
                            onClick={() => setEditClientOpened(true)}
                        >
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
                        <Modal
                            isOpen={editClientOpened}
                            onClose={() => setEditClientOpened(false)}
                        >
                            <EditClientForm isOpen={editClientOpened} />
                        </Modal>
                    </>
                )}
                <div className={styles.employee}>
                    <span className={styles.employee_name}>Имя Фамилия</span>
                    <span className={styles.employee_pos}>Должность</span>
                </div>
            </div>
        </>
    );
};

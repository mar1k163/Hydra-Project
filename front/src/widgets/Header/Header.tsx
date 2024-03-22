import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "widgets/Logo/Logo";
import { Modal } from "shared/ui/Modal/Modal";
import { EditClientForm } from "features/EditClient";
import { useUserStore } from "entities/User/model/store/UserStore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useClientStore } from "entities/Clients/model/store/ClientsStore";
import CloseIcon from "shared/assets/icons/close.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import Logout from "entities/User/services/Logout";

interface HeaderProps {
    isClient: boolean;
}
export const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [lgout, setLgout] = React.useState(false);
    const { id } = useParams();
    const { isClient } = props;
    const user = useUserStore((state) => state.user);
    const client = useClientStore((state) => state.client);
    const fetchClient = useClientStore((state) => state.fetchThisClient);
    const [editClientOpened, setEditClientOpened] = React.useState(false);
    React.useEffect(() => {
        if (isClient) {
            fetchClient(parseInt(id));
        }
    }, [fetchClient, id, isClient]);
    const handleButtonClick = () => {
        if (location.pathname === RouterPath.dashboard) {
            setLgout(true);
        } else {
            navigate(-1);
        }
    };
    return (
        <>
            <header className={styles.header}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.close}
                    onClick={handleButtonClick}
                >
                    <CloseIcon />
                </Button>
                <div className={styles.content}>
                    <Logo width={350} height={150} />
                    {isClient && client !== null && (
                        <>
                            <div
                                className={styles.client}
                                onClick={() => setEditClientOpened(true)}
                            >
                                <p className={styles.client_title}>Клиент:</p>
                                <div className={styles.client_info}>
                                    <span className={styles.client_info_name}>
                                        {client.firstname} {client.secondname}{" "}
                                        {client.lastname}
                                    </span>
                                    <span className={styles.client_info_adress}>
                                        {client.addres}
                                    </span>
                                    <span className={styles.client_info_tel}>
                                        {client.phone}
                                    </span>
                                </div>
                            </div>
                            <Modal
                                isOpen={editClientOpened}
                                onClose={() => setEditClientOpened(false)}
                            >
                                <EditClientForm
                                    id={client.id}
                                    lastname={client.lastname}
                                    firstname={client.firstname}
                                    secondname={client.secondname}
                                    addres={client.addres}
                                    phone={client.phone}
                                    email={client.email}
                                    isOpen={editClientOpened}
                                    onClose={() => setEditClientOpened(false)}
                                />
                            </Modal>
                        </>
                    )}
                    <div className={styles.employee}>
                        <span className={styles.employee_name}>
                            {user.first_name} {user.second_name}{" "}
                            {user.last_name}
                        </span>
                        <span className={styles.employee_pos}>Должность</span>
                    </div>
                </div>
            </header>
            {lgout && <Logout />}
        </>
    );
};

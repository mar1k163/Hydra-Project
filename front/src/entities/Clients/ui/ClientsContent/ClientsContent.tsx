import React, { useContext } from "react";
import styles from "./ClientsContent.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ClientsItem } from "../ClientItem/ClientsItem";
import { Modal } from "shared/ui/Modal/Modal";
import { CreateClientForm } from "features/CreateClient/ui/CreateClientForm";
import { UserContext } from "app/providers/userContext/userContext";
export const ClientsContent = () => {
    const [createClientOpened, setCreateClientOpened] = React.useState(false);
    const Clients = useContext(UserContext);

    return (
        <div className={styles.clients}>
            <Button
                theme={ButtonTheme.CREATE_CLIENT}
                className={styles.btn_create}
                onClick={() => setCreateClientOpened(true)}
            >
                Создать клиента
            </Button>
            <Modal
                isOpen={createClientOpened}
                onClose={() => setCreateClientOpened(false)}
            >
                <CreateClientForm isOpen={createClientOpened} />
            </Modal>
            <div className={styles.clients_list}>
                {Clients.map((client) => (
                    <ClientsItem
                        key={client.id}
                        id={client.id}
                        otchestvo={client.otchestvo}
                        familiya={client.familiya}
                        name={client.name}
                        address={client.address}
                        phone={client.phone}
                    />
                ))}
            </div>
        </div>
    );
};

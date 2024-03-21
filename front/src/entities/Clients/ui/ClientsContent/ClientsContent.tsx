import React from "react";
import styles from "./ClientsContent.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ClientsItem } from "../ClientItem/ClientsItem";
import { Modal } from "shared/ui/Modal/Modal";
import { CreateClientForm } from "features/CreateClient/ui/CreateClientForm";
import { useClientStore } from "entities/Clients/model/store/ClientsStore";
import { useClientCardStore } from "entities/ClientCard/model/store/ClientCardStore";
export const ClientsContent = () => {
    const [createClientOpened, setCreateClientOpened] = React.useState(false);
    const clients = useClientStore((state) => state.clients);
    const fetchClients = useClientStore((state) => state.fetchClients);
    const isLoading = useClientStore((state) => state.isLoading);
    const clearCalculations = useClientCardStore(
        (state) => state.clearCalculations
    );
    React.useEffect(() => {
        fetchClients();
        clearCalculations();
    }, [clearCalculations, fetchClients]);
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
                <CreateClientForm
                    isOpen={createClientOpened}
                    onClose={() => setCreateClientOpened(false)}
                />
            </Modal>
            <div className={styles.clients_list}>
                {!isLoading &&
                    clients !== null &&
                    clients.map((client) => (
                        <ClientsItem
                            key={client.id}
                            id={client.id}
                            lastname={client.lastname}
                            secondname={client.secondname}
                            firstname={client.firstname}
                            addres={client.addres}
                            phone={client.phone}
                        />
                    ))}
            </div>
        </div>
    );
};

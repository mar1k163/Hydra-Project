import Input from "shared/ui/Input/Input";
import styles from "./EditClientForm.module.scss";
import React, { useContext } from "react";
import { Button } from "shared/ui/Button/Button";
import { ClientContext } from "app/providers/userContext/userContext";

interface CreateClientFormProps {
    isOpen: boolean;
}

export const EditClientForm = (props: CreateClientFormProps) => {
    const { isOpen } = props;
    const Client = useContext(ClientContext);

    const [familiyaValue, setFamiliyaValue] = React.useState(Client.familiya);
    const [nameValue, setNameValue] = React.useState(Client.name);
    const [otchestvoValue, setOtchestvoValue] = React.useState(
        Client.otchestvo
    );
    const [phoneValue, setPhoneValue] = React.useState(Client.phone);
    const [emailValue, setEmailValue] = React.useState(Client.email);
    const [addressValue, setAddressValue] = React.useState(Client.address);
    const [clientEditing, setClientEditing] = React.useState(false);
    const resetForm = () => {
        setFamiliyaValue(Client.familiya);
        setNameValue(Client.name);
        setOtchestvoValue(Client.otchestvo);
        setPhoneValue(Client.phone);
        setEmailValue(Client.email);
        setAddressValue(Client.address);
        setClientEditing(false);
    };

    React.useEffect(() => {
        if (isOpen) {
            resetForm();
        }
    }, [isOpen]);

    return (
        <div className={styles.createClientForm}>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <span className={styles.field_title}>Фамилия</span>
                    <Input
                        value={familiyaValue}
                        onChange={(value) => setFamiliyaValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Имя</span>
                    <Input
                        value={nameValue}
                        onChange={(value) => setNameValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Отчество</span>
                    <Input
                        value={otchestvoValue}
                        onChange={(value) => setOtchestvoValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Телефон</span>
                    <Input
                        value={phoneValue}
                        onChange={(value) => setPhoneValue(value)}
                        className={styles.field_input}
                        type="tel"
                        disabled={!clientEditing}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>E-mail</span>
                    <Input
                        value={emailValue}
                        onChange={(value) => setEmailValue(value)}
                        className={styles.field_input}
                        type="email"
                        disabled={!clientEditing}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Адрес</span>
                    <Input
                        value={addressValue}
                        onChange={(value) => setAddressValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <Button
                    className={styles.buttons_create}
                    onClick={() => {
                        setClientEditing(true);
                    }}
                >
                    Редактировать
                </Button>
                <Button
                    className={styles.buttons_create}
                    onClick={() => {
                        console.log("sozdano");
                    }}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

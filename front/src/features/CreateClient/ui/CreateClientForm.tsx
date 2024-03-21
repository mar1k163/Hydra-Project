import Input from "shared/ui/Input/Input";
import styles from "./CreateClientForm.module.scss";
import React from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { CreateClientFormProps } from "../model/types/CreateClientType";
import { useClientStore } from "entities/Clients/model/store/ClientsStore";
import { CreateClientService } from "../model/services/CreateClientService";

export const CreateClientForm = (props: CreateClientFormProps) => {
    const { isOpen, onClose } = props;
    const [secondnameValue, setSecondnameValue] = React.useState("");
    const [firstnameValue, setFirstnameValue] = React.useState("");
    const [lastnameValue, setLastnameValue] = React.useState("");
    const [phoneValue, setPhoneValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [addresValue, setAddresValue] = React.useState("");
    const fetchClients = useClientStore((state) => state.fetchClients);
    const resetForm = () => {
        setSecondnameValue("");
        setFirstnameValue("");
        setLastnameValue("");
        setPhoneValue("");
        setEmailValue("");
        setAddresValue("");
    };
    React.useEffect(() => {
        if (isOpen) {
            resetForm();
        }
    }, [isOpen]);
    const onClickCreate = () => {
        CreateClientService({
            firstname: firstnameValue,
            secondname: secondnameValue,
            lastname: lastnameValue,
            phone: phoneValue,
            email: emailValue,
            addres: addresValue,
        })
            .then(() => onClose())
            .then(() => fetchClients());
    };
    return (
        <div className={styles.createClientForm}>
            <div className={styles.fields}>
                <div className={styles.field}>
                    <span className={styles.field_title}>Фамилия</span>
                    <Input
                        value={secondnameValue}
                        onChange={(value) => setSecondnameValue(value)}
                        className={styles.field_input}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Имя</span>
                    <Input
                        value={firstnameValue}
                        onChange={(value) => setFirstnameValue(value)}
                        className={styles.field_input}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Отчество</span>
                    <Input
                        value={lastnameValue}
                        onChange={(value) => setLastnameValue(value)}
                        className={styles.field_input}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Телефон</span>
                    <Input
                        value={phoneValue}
                        onChange={(value) => setPhoneValue(value)}
                        className={styles.field_input}
                        type="tel"
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>E-mail</span>
                    <Input
                        value={emailValue}
                        onChange={(value) => setEmailValue(value)}
                        className={styles.field_input}
                        type="email"
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Адрес</span>
                    <Input
                        value={addresValue}
                        onChange={(value) => setAddresValue(value)}
                        className={styles.field_input}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <Button
                    theme={ButtonTheme.CREATE_CLIENT}
                    className={styles.buttons_create}
                    onClick={onClickCreate}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

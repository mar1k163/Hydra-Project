import Input from "shared/ui/Input/Input";
import styles from "./EditClientForm.module.scss";
import React from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { EditClientFormProps } from "../model/types/EditClientFormType";
import { EditClientService } from "../model/services/EditClientService";
import { useClientStore } from "entities/Clients/model/store/ClientsStore";

export const EditClientForm = (props: EditClientFormProps) => {
    const {
        isOpen,
        onClose,
        id,
        lastname,
        firstname,
        secondname,
        phone,
        email,
        addres,
    } = props;
    const [secondnameValue, setSecondnameValue] = React.useState(secondname);
    const [firstnameValue, setFirstnameValue] = React.useState(firstname);
    const [lastnameValue, setLastnameValue] = React.useState(lastname);
    const [phoneValue, setPhoneValue] = React.useState(phone);
    const [emailValue, setEmailValue] = React.useState(email);
    const [addresValue, setAddresValue] = React.useState(addres);
    const [clientEditing, setClientEditing] = React.useState(false);
    const fetchClient = useClientStore((state) => state.fetchThisClient);
    console.log(id, lastname, firstname, secondname, phone, email, addres);
    const resetForm = () => {
        setSecondnameValue(secondname);
        setFirstnameValue(firstname);
        setLastnameValue(lastname);
        setPhoneValue(phone);
        setEmailValue(email);
        setAddresValue(addres);
        setClientEditing(false);
    };
    const onCLickCancel = () => {
        setClientEditing(false);
        resetForm();
    };
    React.useEffect(() => {
        if (isOpen) {
            resetForm();
        }
    }, [isOpen]);
    const onClickEditClient = () => {
        EditClientService({
            id: id,
            firstname: firstnameValue,
            secondname: secondnameValue,
            lastname: lastnameValue,
            phone: phoneValue,
            email: emailValue,
            addres: addresValue,
        })
            .then(() => onClose())
            .then(() => fetchClient(id));
    };
    return (
        <div className={styles.createClientForm}>
            <div className={styles.fields}>
                <div
                    className={`${styles.field} ${
                        clientEditing ? styles.active : ""
                    }`}
                >
                    <span className={styles.field_title}>Фамилия</span>
                    <Input
                        value={secondnameValue}
                        onChange={(value) => setSecondnameValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
                <div
                    className={`${styles.field} ${
                        clientEditing ? styles.active : ""
                    }`}
                >
                    <span className={styles.field_title}>Имя</span>
                    <Input
                        value={firstnameValue}
                        onChange={(value) => setFirstnameValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
                <div
                    className={`${styles.field} ${
                        clientEditing ? styles.active : ""
                    }`}
                >
                    <span className={styles.field_title}>Отчество</span>
                    <Input
                        value={lastnameValue}
                        onChange={(value) => setLastnameValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
                <div
                    className={`${styles.field} ${
                        clientEditing ? styles.active : ""
                    }`}
                >
                    <span className={styles.field_title}>Телефон</span>
                    <Input
                        value={phoneValue}
                        onChange={(value) => setPhoneValue(value)}
                        className={styles.field_input}
                        type="tel"
                        disabled={!clientEditing}
                    />
                </div>
                <div
                    className={`${styles.field} ${
                        clientEditing ? styles.active : ""
                    }`}
                >
                    <span className={styles.field_title}>E-mail</span>
                    <Input
                        value={emailValue}
                        onChange={(value) => setEmailValue(value)}
                        className={styles.field_input}
                        type="email"
                        disabled={!clientEditing}
                    />
                </div>
                <div
                    className={`${styles.field} ${
                        clientEditing ? styles.active : ""
                    }`}
                >
                    <span className={styles.field_title}>Адрес</span>
                    <Input
                        value={addresValue}
                        onChange={(value) => setAddresValue(value)}
                        className={styles.field_input}
                        disabled={!clientEditing}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                {clientEditing ? (
                    <Button
                        theme={ButtonTheme.CREATE_CLIENT}
                        className={styles.buttons_create}
                        onClick={onCLickCancel}
                    >
                        Отмена
                    </Button>
                ) : (
                    <Button
                        theme={ButtonTheme.CREATE_CLIENT}
                        className={styles.buttons_create}
                        onClick={() => {
                            setClientEditing(true);
                        }}
                    >
                        Редактировать
                    </Button>
                )}
                <Button
                    theme={ButtonTheme.CREATE_CLIENT}
                    className={styles.buttons_create}
                    onClick={onClickEditClient}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

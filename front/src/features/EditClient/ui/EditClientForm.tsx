import Input from "shared/ui/Input/Input";
import styles from "./EditClientForm.module.scss";
import React from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { EditClientFormProps } from "../model/types/EditClientFormType";

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
    const [familiyaValue, setFamiliyaValue] = React.useState("");
    const [nameValue, setNameValue] = React.useState("");
    const [otchestvoValue, setOtchestvoValue] = React.useState("");
    const [phoneValue, setPhoneValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [addressValue, setAddressValue] = React.useState("");
    const [clientEditing, setClientEditing] = React.useState(false);
    const resetForm = () => {
        setFamiliyaValue("");
        setNameValue("");
        setOtchestvoValue("");
        setPhoneValue("");
        setEmailValue("");
        setAddressValue("");
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
                        value={familiyaValue}
                        onChange={(value) => setFamiliyaValue(value)}
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
                        value={nameValue}
                        onChange={(value) => setNameValue(value)}
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
                        value={otchestvoValue}
                        onChange={(value) => setOtchestvoValue(value)}
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
                        value={addressValue}
                        onChange={(value) => setAddressValue(value)}
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
                    onClick={onClose}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

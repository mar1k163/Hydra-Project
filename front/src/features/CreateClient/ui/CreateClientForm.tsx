import Input from "shared/ui/Input/Input";
import styles from "./CreateClientForm.module.scss";
import React from "react";
import { Button } from "shared/ui/Button/Button";

interface CreateClientFormProps {
    isOpen: boolean;
}

export const CreateClientForm = (props: CreateClientFormProps) => {
    const { isOpen } = props;
    const [familiyaValue, setFamiliyaValue] = React.useState("");
    const [nameValue, setNameValue] = React.useState("");
    const [otchestvoValue, setOtchestvoValue] = React.useState("");
    const [phoneValue, setPhoneValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [addressValue, setAddressValue] = React.useState("");
    const resetForm = () => {
        setFamiliyaValue("");
        setNameValue("");
        setOtchestvoValue("");
        setPhoneValue("");
        setEmailValue("");
        setAddressValue("");
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
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Имя</span>
                    <Input
                        value={nameValue}
                        onChange={(value) => setNameValue(value)}
                        className={styles.field_input}
                    />
                </div>
                <div className={styles.field}>
                    <span className={styles.field_title}>Отчество</span>
                    <Input
                        value={otchestvoValue}
                        onChange={(value) => setOtchestvoValue(value)}
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
                        value={addressValue}
                        onChange={(value) => setAddressValue(value)}
                        className={styles.field_input}
                    />
                </div>
            </div>
            <div className={styles.button}>
                <Button
                    className={styles.button_create}
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

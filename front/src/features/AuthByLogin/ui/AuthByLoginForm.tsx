import Input, { InputTheme } from "shared/ui/Input/Input";
import styles from "./AuthByLoginForm.module.scss";
import { Logo } from "widgets/Logo/Logo";
import { Button } from "shared/ui/Button/Button";
import React from "react";
import { AuthByLoginService } from "../model/services/AuthByLoginTypeService";
import { useUserStore } from "entities/User/model/store/UserStore";
export const AuthByLoginForm = () => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    const fetchUser = useUserStore((state) => state.fetchUser);
    const [err, setErr] = React.useState(false);
    const onClickLogin = async () => {
        setErr(false);
        AuthByLoginService({ login: login, password: password })
            .then(() => fetchUser())
            .catch(() => setErr(true));
    };

    return (
        <div className={styles.signinForm}>
            <div className={styles.signinForm_wrapper}>
                <Logo width={450} height={210} />
                <div className={styles.inputs}>
                    {err && (
                        <p className={styles.error}>
                            Неверный логин или пароль!
                        </p>
                    )}
                    <div className={styles.input_block}>
                        <p className={styles.title}>Username</p>
                        <Input
                            theme={InputTheme.DEFAULT}
                            className={styles.input}
                            value={login}
                            onChange={(val) => setLogin(val)}
                        />
                    </div>
                    <div className={styles.input_block}>
                        <p className={styles.title}>Password</p>
                        <Input
                            theme={InputTheme.DEFAULT}
                            className={styles.input}
                            value={password}
                            onChange={(val) => setPassword(val)}
                        />
                    </div>
                </div>
                <Button
                    className={`${styles.btn} ${
                        password.length < 5 ? styles.disabled : ""
                    }`}
                    onClick={onClickLogin}
                    disabled={password.length < 5}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
};

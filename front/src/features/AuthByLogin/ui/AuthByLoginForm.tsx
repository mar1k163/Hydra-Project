import styles from "./AuthByLoginForm.module.scss";
import { Logo } from "widgets/Logo/Logo";
export const AuthByLoginForm = () => {
    return (
        <div className={styles.signinForm}>
            <div className={styles.signinForm_wrapper}>
                <Logo width={450} height={210} />
                <form>
                    <input type="text" placeholder="Введите ваш email" />
                    <input type="text" placeholder="Введите ваш пароль" />
                </form>
                <button className={styles.btn}>Войти</button>
            </div>
        </div>
    );
};

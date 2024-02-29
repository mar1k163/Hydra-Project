import React from "react";
import styles from "./AuthByLoginForm.module.scss";
import { Logo } from "widgets/Logo/Logo";
import { Button } from "shared/ui/Button/Button";
export const AuthByLoginForm = () => {
    return (
        <div className={styles.signinForm}>
            <div className={styles.signinForm_wrapper}>
                <Logo  width={450} height={210}/>
                <form>
                    <input type="text" placeholder="Введите ваш email" />
                    <input type="text" placeholder="Введите ваш пароль" />
                </form>
                <button>
                    Войти
                </button>
              
            </div>

        </div>
    );
}






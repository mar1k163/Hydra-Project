import { type ButtonHTMLAttributes, type FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
    DEFAULT = "default",
    CLEAR = "clear",
    CLIENTS_CARD = "clients_card",
    CREATE_CLIENT = "create_client",
}

type ButtonProps = {
    theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        ...otherProps
    } = props;
    return (
        <button
            className={` ${styles.button} ${styles[theme]} ${className || ""}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

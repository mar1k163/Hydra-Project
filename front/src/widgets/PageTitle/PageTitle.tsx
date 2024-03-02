import styles from "./PageTitle.module.scss";
import ArrowIcon from "shared/assets/icons/arrow.svg?react";
export const PageTitle = () => {
    return (
        <div className={styles.PageTitle}>
            <ArrowIcon />
            <p>Клиенты</p>
        </div>
    );
};

import React from "react";
import styles from "./PageTitle.module.scss";
import ArrowIcon from "shared/assets/icons/Arrow.svg";
export const PageTitle = () => {
    return (
        <div className={styles.PageTitle}>
            <ArrowIcon />
            <p>Клиенты</p>
        </div>
    );
};

import { type ReactNode } from "react";
import styles from "./InfoWindow.module.scss";

interface InfoModalProps {
    children: ReactNode;
    className?: string;
}

export const InfoWindow = (props: InfoModalProps) => {
    const { children, className } = props;
    return (
        <div className={`${styles.info} ${className}`}>
            <div className={styles.info_wrapper}>{children}</div>
        </div>
    );
};

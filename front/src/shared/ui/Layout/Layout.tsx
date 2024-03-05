import { type ReactNode } from "react";
import styles from "./Layout.module.scss";
interface LayoutProps {
    children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <>
            <section className={styles.content_wrapper}>{children}</section>
        </>
    );
};

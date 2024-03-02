import styles from "./PageTitle.module.scss";
import ArrowIcon from "shared/assets/icons/arrow.svg?react";

interface PageTitleProps {
    title: string;
}
export const PageTitle = (props: PageTitleProps) => {
    const { title } = props;
    return (
        <div className={styles.PageTitle}>
            <ArrowIcon />
            <p>{title}</p>
        </div>
    );
};

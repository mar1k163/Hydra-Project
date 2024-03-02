import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./PageTitle.module.scss";
import ArrowIcon from "shared/assets/icons/arrow.svg?react";
import { useNavigate } from "react-router-dom";

interface PageTitleProps {
    title: string;
    url: string;
}
export const PageTitle = (props: PageTitleProps) => {
    const { title, url } = props;
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Переход по указанному URL
        navigate(url);
    };
    return (
        <div className={styles.PageTitle}>
            <Button theme={ButtonTheme.CLEAR} onClick={handleNavigate}>
                <ArrowIcon />
            </Button>
            <p>{title}</p>
        </div>
    );
};

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./PageTitle.module.scss";
import ArrowIcon from "shared/assets/icons/arrow.svg?react";
import { useNavigate } from "react-router-dom";
import Logout from "entities/User/services/Logout";
import React from "react";
import { RouterPath } from "shared/config/routerConfig/routerConfig";

interface PageTitleProps {
    title: string;
}
export const PageTitle = (props: PageTitleProps) => {
    const { title } = props;
    const [lgout, setLgout] = React.useState(false);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (location.pathname === RouterPath.dashboard) {
            setLgout(true);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className={styles.PageTitle}>
            <Button theme={ButtonTheme.CLEAR} onClick={handleButtonClick}>
                <ArrowIcon />
            </Button>
            <p>{title}</p>
            {lgout && <Logout />}
        </div>
    );
};

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./PageTitle.module.scss";
import ArrowIcon from "shared/assets/icons/arrow.svg?react";
import { useNavigate } from "react-router-dom";
import Logout from "entities/User/services/Logout";
import React from "react";

interface PageTitleProps {
    title: string;
    route: string;
    logout?: boolean;
}
export const PageTitle = (props: PageTitleProps) => {
    const { title, route, logout } = props;
    const [lgout, setLgout] = React.useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (logout === true) {
            setLgout(true);
        } else {
            navigate(route);
        }
    };

    return (
        <div className={styles.PageTitle}>
            <Button theme={ButtonTheme.CLEAR} onClick={handleNavigate}>
                <ArrowIcon />
            </Button>
            <p>{title}</p>
            {lgout && <Logout />}
        </div>
    );
};

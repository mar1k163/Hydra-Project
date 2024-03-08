import styles from "./RaschetVariables.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import HouseIcon from "shared/assets/icons/house.svg?react";
import FoundationIcon from "shared/assets/icons/foundation.svg?react";
import RoofIcon from "shared/assets/icons/roof.svg?react";
import { useNavigate } from "react-router-dom";

interface RaschetVariablesProps {
    isClosed: (newIsOpened: boolean) => void;
}

export const RaschetVariables = (props: RaschetVariablesProps) => {
    const { isClosed } = props;
    const navigate = useNavigate();
    const handleNavigate = (param: string) => {
        const currentURL = window.location.pathname;
        navigate(`${currentURL}/${param}`);
    };
    const handleCloseWindow = () => {
        isClosed(false);
    };
    return (
        <div className={styles.window} onMouseLeave={handleCloseWindow}>
            <p className={styles.title}>Выбор конструктивного элемента</p>
            <div className={styles.variables}>
                <Button
                    className={styles.variable}
                    onClick={() => handleNavigate("frame")}
                    theme={ButtonTheme.CLEAR}
                >
                    <HouseIcon />
                    <span>Каркас</span>
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.variable}
                    onClick={() => handleNavigate("foundation")}
                >
                    <FoundationIcon />
                    <span>Фундамент</span>
                </Button>
                <Button className={styles.variable} theme={ButtonTheme.CLEAR}>
                    <RoofIcon />
                    <span>Крыша</span>
                </Button>
            </div>
        </div>
    );
};

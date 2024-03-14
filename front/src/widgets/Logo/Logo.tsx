import styles from "./Logo.module.scss";
import HydraIcon from "shared/assets/icons/icon.png";

interface LogoProps {
    width: number;
    height: number;
}

export const Logo = (props: LogoProps) => {
    const { width, height } = props;
    return (
        <div className={styles.logo} style={{ width: width, height: height }}>
            <img src={HydraIcon} alt="" />
            <span>ГидраСтройРесурс</span>
        </div>
    );
};

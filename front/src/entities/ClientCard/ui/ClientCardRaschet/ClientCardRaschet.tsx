import styles from "./ClientCardRaschet.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import CopyIcon from "shared/assets/icons/Copy.svg?react";
import TrashcanIcon from "shared/assets/icons/Trashcan.svg?react";

interface ClientCardRaschetProps {
    raschet_n: number;
    status: number;
    date: string;
    address: string;
}

export const ClientCardRaschet = (props: ClientCardRaschetProps) => {
    const { raschet_n, status, date, address } = props;
    const statusVar = ["Заключен договор", "Актуален", "Не актуален"];
    return (
        <div className={styles.raschet}>
            <div className={styles.raschet_info}>
                <Button className={styles.raschet_item}>
                    Расчет №{raschet_n}
                </Button>
                <span className={styles.raschet_item}>{date} </span>
                <span className={styles.raschet_item}>{statusVar[status]}</span>
                <span className={styles.raschet_item}>{address}</span>
            </div>
            <div className={styles.raschet_buttons}>
                <Button theme={ButtonTheme.CLEAR}>
                    <CopyIcon />
                </Button>
                {status !== 0 && (
                    <Button theme={ButtonTheme.CLEAR}>
                        <TrashcanIcon />
                    </Button>
                )}
            </div>
        </div>
    );
};

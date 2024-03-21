import styles from "./ClientCardRaschet.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import CopyIcon from "shared/assets/icons/Copy.svg?react";
import TrashcanIcon from "shared/assets/icons/Trashcan.svg?react";
import { Calculation } from "entities/ClientCard/model/types/ClientCardType";

export const ClientCardRaschet = (props: Calculation) => {
    const { id, addres_object_constractions, number, created_date } = props;
    return (
        <div className={styles.raschet}>
            <div className={styles.raschet_info}>
                <Button className={styles.raschet_item}>
                    Расчет №{number}
                </Button>
                <span className={styles.raschet_item}>
                    {created_date.toString()}
                </span>
                <span className={styles.raschet_item}>Статус??</span>
                <span className={styles.raschet_item}>
                    {addres_object_constractions}
                </span>
            </div>
            <div className={styles.raschet_buttons}>
                <Button theme={ButtonTheme.CLEAR}>
                    <CopyIcon />
                </Button>

                <Button theme={ButtonTheme.CLEAR}>
                    <TrashcanIcon />
                </Button>
            </div>
        </div>
    );
};

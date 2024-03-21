import React from "react";
import styles from "./ClientCardContent.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ClientCardRaschet } from "../ClientCardRaschet/ClientCardRaschet";
import { InfoWindow } from "widgets/InfoWindow/InfoWindow";
import { RaschetVariables } from "../RaschetVariables/RaschetVariables";
import { ClientCardNoRaschet } from "../ClientCardNoRaschet/ClientCardNoRaschet";
import { useClientCardStore } from "entities/ClientCard/model/store/ClientCardStore";
import { useParams } from "react-router-dom";

export const ClientCardContent = () => {
    const { id } = useParams();
    const [raschetOpened, setRaschetOpened] = React.useState(false);
    const handleraschetOpened = (newIsOpened: boolean) => {
        setRaschetOpened(newIsOpened);
    };
    const calculations = useClientCardStore((state) => state.calculations);
    const fetchCalc = useClientCardStore((state) => state.fetchCalculations);
    const isLoading = useClientCardStore((state) => state.isLoading);
    React.useEffect(() => {
        fetchCalc(parseInt(id));
    }, [fetchCalc, id]);
    console.log(calculations);
    if (!isLoading) {
        return (
            <div className={styles.clients}>
                <Button
                    theme={ButtonTheme.CREATE_CLIENT}
                    className={styles.btn_create}
                    onClick={() => setRaschetOpened(!raschetOpened)}
                >
                    Создать расчет
                </Button>
                {raschetOpened && (
                    <InfoWindow className={styles.clients_create}>
                        <RaschetVariables isClosed={handleraschetOpened} />
                    </InfoWindow>
                )}
                <div className={styles.rascheti}>
                    {calculations !== null && calculations.length > 0 ? (
                        calculations.map((ras) => (
                            <ClientCardRaschet
                                key={ras.id}
                                id={ras.id}
                                addres_object_constractions={
                                    ras.addres_object_constractions
                                }
                                created_date={ras.created_date}
                                number={ras.number}
                            />
                        ))
                    ) : (
                        <ClientCardNoRaschet />
                    )}
                </div>
            </div>
        );
    }
};

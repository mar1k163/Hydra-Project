export interface ClientCardProps {
    id: number;
}

export interface Calculation {
    id: number;
    addres_object_constractions: string;
    number: number;
    created_date: Date;
}

export interface ClientCardStore {
    calculations: Calculation[];
    isLoading: boolean;
    fetchCalculations: (id: number) => Promise<void>;
}

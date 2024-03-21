export interface Client {
    id: number;
    lastname: string;
    firstname: string;
    secondname: string;
    phone?: string;
    email?: string;
    addres?: string;
}

export interface ClientState {
    clients: Client[];
    isLoading: boolean;
    client: Client;
    clientIsLoading: boolean;
    fetchClients: () => Promise<void>;
    fetchThisClient: (id: number) => Promise<void>;
}

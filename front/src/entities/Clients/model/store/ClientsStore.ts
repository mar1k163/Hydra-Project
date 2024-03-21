import { create } from "zustand";
import { $api } from "shared/api/api";
import { ClientState } from "../types/ClientsTypes";

export const useClientStore = create<ClientState>((set) => ({
    clients: null,
    isLoading: true,
    client: null,
    clientIsLoading: true,
    fetchClients: async () => {
        try {
            const { data } = await $api.get(`/customers`);
            set({ clients: data });
            set({ isLoading: false });
        } catch (err) {
            set({ clients: null });
            set({ isLoading: false });
        }
    },
    fetchThisClient: async (id) => {
        try {
            const { data } = await $api.get(`/customers/${id}`);
            set({ client: data });
            set({ isLoading: false });
        } catch (err) {
            set({ client: null });
            set({ isLoading: false });
        }
    },
}));

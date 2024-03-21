import { create } from "zustand";
import { $api } from "shared/api/api";
import { ClientCardStore } from "../types/ClientCardType";

export const useClientCardStore = create<ClientCardStore>((set) => ({
    calculations: null,
    isLoading: true,
    fetchCalculations: async (id) => {
        try {
            const { data } = await $api.get(`/calculation/${id}`);
            set({ calculations: data });
            set({ isLoading: false });
        } catch (err) {
            set({ calculations: null });
            set({ isLoading: false });
        }
    },
    clearCalculations: () => set({ calculations: null }),
}));

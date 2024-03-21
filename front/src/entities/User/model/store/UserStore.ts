import { create } from "zustand";
import { UserState } from "../types/UserType";
import { $api } from "shared/api/api";

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isLoading: true,
    fetchUser: async () => {
        try {
            const { data } = await $api.get("/user/me");
            set({ user: data });
            set({ isLoading: false });
        } catch (err) {
            set({ user: null });
            set({ isLoading: false });
        }
    },
    logoutUser: () => set({ user: null }),
}));

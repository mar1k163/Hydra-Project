interface User {
    id: number;
    first_name: string;
    email: string;
    last_name: string;
    login: string;
    password: string;
    phone: string;
    second_name: string;
}

export interface UserState {
    user: User;
    isLoading: boolean;
    fetchUser: () => Promise<void>;
    logoutUser: () => void;
}

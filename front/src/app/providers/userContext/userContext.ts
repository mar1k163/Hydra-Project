import { createContext } from "react";

interface UserContextProps {
    id: number;
    familiya: string;
    otchestvo: string;
    name: string;
    phone: string;
    address: string;
}
const Clients: UserContextProps[] = [
    {
        id: 1,
        familiya: "Иванов",
        otchestvo: "Петрович",
        name: "Александр",
        address: "ул. Примерная, д. 123, кв. 45",
        phone: "+7 (123) 456-7890",
    },
    {
        id: 2,
        familiya: "Петров",
        otchestvo: "Иванович",
        name: "Евгений",
        address: "ул. Тестовая, д. 456, кв. 78",
        phone: "+7 (234) 567-8901",
    },
    {
        id: 3,
        familiya: "Сидоров",
        otchestvo: "Александрович",
        name: "Игорь",
        address: "ул. Образцовая, д. 789, кв. 12",
        phone: "+7 (345) 678-9012",
    },
    {
        id: 4,
        familiya: "Кузнецов",
        otchestvo: "Дмитриевич",
        name: "Максим",
        address: "ул. Типовая, д. 101, кв. 23",
        phone: "+7 (456) 789-0123",
    },
    {
        id: 5,
        familiya: "Смирнов",
        otchestvo: "Сергеевич",
        name: "Николай",
        address: "ул. Стандартная, д. 202, кв. 34",
        phone: "+7 (567) 890-1234",
    },
    {
        id: 6,
        familiya: "Федоров",
        otchestvo: "Анатольевич",
        name: "Олег",
        address: "ул. Обычная, д. 303, кв. 56",
        phone: "+7 (678) 901-2345",
    },
    {
        id: 7,
        familiya: "Морозов",
        otchestvo: "Владимирович",
        name: "Павел",
        address: "ул. Регулярная, д. 404, кв. 67",
        phone: "+7 (789) 012-3456",
    },
    {
        id: 8,
        familiya: "Белов",
        otchestvo: "Артемович",
        name: "Роман",
        address: "ул. Шаблонная, д. 505, кв. 78",
        phone: "+7 (890) 123-4567",
    },
    {
        id: 9,
        familiya: "Тимофеев",
        otchestvo: "Арсеньевич",
        name: "Семен",
        address: "ул. Примерная, д. 606, кв. 89",
        phone: "+7 (901) 234-5678",
    },
    {
        id: 10,
        familiya: "Васнецов",
        otchestvo: "Игнатьевич",
        name: "Тимур",
        address: "ул. Тестовая, д. 707, кв. 90",
        phone: "+7 (012) 345-6789",
    },
];

export const UserContext = createContext<UserContextProps[]>(Clients);

export const ClientContext = createContext<UserContextProps | null>(null);

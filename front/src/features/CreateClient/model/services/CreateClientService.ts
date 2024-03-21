import { $api } from "shared/api/api";
import { CreateClientServiceProps } from "../types/CreateClientType";

export const CreateClientService = async (props: CreateClientServiceProps) => {
    const { firstname, secondname, lastname, phone, email, addres } = props;
    const params = {
        firstname: firstname,
        secondname: secondname,
        lastname: lastname,
        phone: phone,
        email: email,
        addres: addres,
    };
    const response = await $api.post("/customers", params);
    return response;
};

import { $api } from "shared/api/api";
import { EditClientFormProps } from "../types/EditClientFormType";

export const EditClientService = async (props: EditClientFormProps) => {
    const { id, firstname, secondname, lastname, phone, addres, email } = props;
    const params = {
        firstname: firstname,
        secondname: secondname,
        lastname: lastname,
        phone: phone,
        addres: addres,
        email: email,
    };
    const response = await $api.patch(`/customers/${id}`, params);
    return response;
};

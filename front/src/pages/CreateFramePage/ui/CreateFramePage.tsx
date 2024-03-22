import { CreateFrameForm } from "features/CreateFrame";
import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";

export const CreateFramePage = () => {
    return (
        <>
            <Header isClient={true} />
            <PageTitle title="Каркас" />
            <CreateFrameForm />
        </>
    );
};
export default CreateFramePage;

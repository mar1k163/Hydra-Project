import { CreateFrameForm } from "features/CreateFrame";
import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";

export const CreateFramePage = () => {
    return (
        <>
            <Header isClient={true} />
            <PageTitle title="Каркас" route="/dashboard" />
            <CreateFrameForm />
        </>
    );
};
export default CreateFramePage;

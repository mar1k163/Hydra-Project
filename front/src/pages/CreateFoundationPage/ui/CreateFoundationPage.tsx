import { CreateFoundationForm } from "features/CreateFoundation";
import { Header } from "widgets/Header/Header";
import { PageTitle } from "widgets/PageTitle/PageTitle";

export const CreateFoundationPage = () => {
    return (
        <>
            <Header isClient={true} />
            <PageTitle title="Фундамент" />
            <CreateFoundationForm />
        </>
    );
};
export default CreateFoundationPage;

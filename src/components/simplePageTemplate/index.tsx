import GlobalMenu from "../globalMenu";

const SimplePageTemplate = ({ children }: any) => {
    return (
        <>
            <GlobalMenu />
            {children}
        </>
    );
}

export default SimplePageTemplate;
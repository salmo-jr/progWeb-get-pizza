import GlobalMenu from "../../components/GlobalMenu";
import Logo from "../../assets/images/ferrari.jpg";

const Home = () => {
    return(
        <>
            <GlobalMenu />
            <h1>Home</h1>
            <img src={Logo} alt="ferrari vermelha" />
        </>
    );
}

export default Home;
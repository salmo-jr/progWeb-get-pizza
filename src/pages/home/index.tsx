import ReactPlayer from 'react-player';
import SimplePageTemplate from "../../components/simplePageTemplate";

const Home = () => {
    return(
        <SimplePageTemplate>
            <h1>Home</h1>
            <ReactPlayer controls playing muted url='https://www.youtube.com/watch?v=xRQnJyP77tY' />
        </SimplePageTemplate>
    );
}

export default Home;
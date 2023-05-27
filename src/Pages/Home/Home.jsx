import Banner from "./Banner";
import CallUs from "./CallUs";
import Menu from "./Menu";
import Poster from "./Poster";
import Recommends from "./Recommends";
import Slider from "./Slider";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Poster></Poster>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;
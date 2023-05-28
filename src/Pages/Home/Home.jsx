import HomeBanner from "./HomeBanner";
import CallUs from "./CallUs";
import Featured from "./Featured";
import Menu from "./Menu";
import Poster from "./Poster";
import Recommends from "./Recommends";
import Slider from "./Slider";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Slider></Slider>
            <Poster></Poster>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
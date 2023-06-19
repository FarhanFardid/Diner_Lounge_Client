import HomeBanner from "./HomeBanner";
import CallUs from "./CallUs";
import Featured from "./Featured";
import Menu from "./Menu";
import Poster from "./Poster";
import Recommends from "./Recommends";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";



const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Diner Lounge | Home</title>
       
      </Helmet>
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
import CommonBanner from "../../Shared/CommonBanner";
import MenuBan from '../../assets/menu/banner3.jpg'
import TodayOffer from "./TodayOffer";
import Pizza from "./Pizza";
import Soup from "./Soup";
import Desserts from "./Desserts";
import Salads from "./Salads";



const Menu = () => {
    return (
        <div>
            <CommonBanner img={MenuBan} heading="Our Menu" content="Delight your taste buds at Bistro Boss: Where culinary excellence meets gastronomic bliss" size='big' ></CommonBanner>
           <TodayOffer></TodayOffer>
           <Pizza></Pizza>
           <Soup></Soup>
           <Desserts></Desserts>
           <Salads></Salads>

        </div>
    );
};

export default Menu;

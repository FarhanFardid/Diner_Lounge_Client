import CommonBanner from "../../Shared/CommonBanner";
import MenuBan from '../../assets/menu/banner3.jpg'


import dessertpBan from '../../assets/menu/dessert-bg.jpeg'
import saladBan from '../../assets/menu/salad-bg.jpg'
import TodayOffer from "./TodayOffer";
import Pizza from "./Pizza";
import Soup from "./Soup";



const Menu = () => {
    return (
        <div>
            <CommonBanner img={MenuBan} heading="Our Menu" content="Delight your taste buds at Bistro Boss: Where culinary excellence meets gastronomic bliss" size='big' ></CommonBanner>
           <TodayOffer></TodayOffer>
           <Pizza></Pizza>
           <Soup></Soup>

        </div>
    );
};

export default Menu;

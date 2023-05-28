import CommonBanner from "../../Shared/CommonBanner";
import MenuBan from '../../assets/menu/banner3.jpg'
import soupBan from '../../assets/menu/soup-bg.jpg'
import pizzaBan from '../../assets/menu/pizza-bg.jpg'
import dessertpBan from '../../assets/menu/dessert-bg.jpeg'
import saladBan from '../../assets/menu/salad-bg.jpg'
import TodayOffer from "./TodayOffer";



const Menu = () => {
    return (
        <div>
            <CommonBanner img={MenuBan} heading="Our Menu" content="Delight your taste buds at Bistro Boss: Where culinary excellence meets gastronomic bliss" size='big' ></CommonBanner>
           <TodayOffer></TodayOffer>

        </div>
    );
};

export default Menu;

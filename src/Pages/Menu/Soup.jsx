
import CommonBanner from '../../Shared/CommonBanner';
import soupBan from '../../assets/menu/soup-bg.jpg'
import ItemCard from '../../Shared/ItemCard';
import Btn from '../../Components/Btn';
import useMenu from '../../Hooks/useMenu';
import { Link } from 'react-router-dom';

const Soup = () => {
    const [menu] = useMenu();

    const soups = menu.filter(dt=> dt.category === 'soup')
    return (
        <div>
        <CommonBanner img={soupBan} heading="Soups" content="Savor warmth and comfort with Diner Lounge' soul-soothing soup menu: From creamy classics to hearty broths, our carefully crafted soups are infused with flavors that will nourish your senses and leave you craving for more" size = "null" ></CommonBanner>
        <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
          {
              soups.map(soup=> <ItemCard key={soup._id} item={soup}></ItemCard> )
          }

       </div>
       <Link to="/order/soup"><Btn btn="Order Now"></Btn></Link>
  </div>
    );
};

export default Soup;
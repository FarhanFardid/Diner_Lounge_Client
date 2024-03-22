
import Btn from "../../Components/Btn";
import CommonBanner from "../../Shared/CommonBanner";
import ItemCard from "../../Shared/ItemCard";
import dessertBan from '../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";


const Desserts = () => {
    const [menu] = useMenu();

    const desserts = menu.filter(dt=> dt.category === 'dessert')
    return (
        <div>
        <CommonBanner img={dessertBan} heading="Desserts" content="Indulge your sweet tooth at Diner Lounge: Our heavenly desserts menu is a symphony of decadent delights, featuring irresistible cakes, velvety mousses, and divine confections that will transport you to a state of dessert euphoria" size = "null" ></CommonBanner>
        <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
          {
              desserts.map(dessert=> <ItemCard key={dessert._id} item={dessert}></ItemCard> )
          }

       </div>
       <Link to="/order"><Btn btn="Order Now"></Btn></Link>
  </div>
    );
};

export default Desserts;
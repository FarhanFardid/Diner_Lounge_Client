
import Btn from "../../Components/Btn";
import CommonBanner from "../../Shared/CommonBanner";
import ItemCard from "../../Shared/ItemCard";
import saladBan from '../../assets/menu/salad-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const Salads = () => {
    const [menu] = useMenu();

    const salads = menu.filter(dt=> dt.category === 'salad')
    return (
        <div>
        <CommonBanner img={saladBan} heading="Salads" content="Elevate your greens game at Diner Lounge: Our vibrant salads menu showcases a medley of farm-fresh ingredients, crisp vegetables, and delightful dressings, delivering a burst of flavors and wholesome goodness in every refreshing bite" size = "null" ></CommonBanner>
        <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
          {
              salads.map(salad=> <ItemCard key={salad._id} item={salad}></ItemCard> )
          }

       </div>
       <Link to="/order"><Btn btn="Order Now"></Btn></Link>
  </div>
    );
};

export default Salads;
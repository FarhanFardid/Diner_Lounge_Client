
import SectionTitle from "../../Shared/SectionTitle";
import ItemCard from "../../Shared/ItemCard";
import Btn from "../../Components/Btn";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";


const TodayOffer = () => {
    const [menu] = useMenu();

    const offers = menu.filter(dt=> dt.category === 'offered')
    return (
        <div>
             <SectionTitle heading="Today's Offer" subHeading="Don't miss"></SectionTitle>
             <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
                {
                    offers.map(offer=> <ItemCard key={offer._id} item={offer}></ItemCard> )
                }
             </div>
             <Link to="/order/special"><Btn btn="Order Now"></Btn></Link>
        </div>
    );
};

export default TodayOffer;
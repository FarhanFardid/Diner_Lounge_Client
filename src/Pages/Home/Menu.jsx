
import SectionTitle from "../../Shared/SectionTitle";
import ItemCard from "../../Shared/ItemCard";
import Btn from "../../Components/Btn";
import { Link } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";


const Menu = () => {
    const [menu] = useMenu();
 
    const popular = menu.filter(item => item.category === "popular");
    return (
        <div>
            <SectionTitle heading="From Our Menu" subHeading="Check it out"></SectionTitle>
             <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
                {
                popular.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
        </div>
        <Link to='/menu' ><Btn btn="View Full Menu"></Btn></Link>
        </div>

    );
};

export default Menu;
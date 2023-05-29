
import CommonBanner from "../../Shared/CommonBanner";
import pizzaBan from '../../assets/menu/pizza-bg.jpg'
import ItemCard from "../../Shared/ItemCard";
import Btn from "../../Components/Btn";
import useMenu from "../../Hooks/useMenu";

const Pizza = () => {
    const [menu] = useMenu();

    const pizzas = menu.filter(dt=> dt.category === 'pizza')
    return (
        <div>
              <CommonBanner img={pizzaBan} heading="Pizzas" content="Experience pizza perfection at Bistro Boss: Our mouthwatering pizza menu brings together artisanal crusts, premium toppings, and tantalizing flavors, delivering a slice of pure satisfaction with every bite." size = "null" ></CommonBanner>
              <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
                {
                    pizzas.map(pizza=> <ItemCard key={pizza._id} item={pizza}></ItemCard> )
                }
             </div>
             <Btn btn="Order Your Favorite Food"></Btn>
        </div>
    );
};

export default Pizza;
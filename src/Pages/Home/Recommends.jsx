
import SectionTitle from "../../Shared/SectionTitle";
import FoodCard from "../../Shared/FoodCard";
import useMenu from "../../Hooks/useMenu";


const Recommends = () => {
    const [menu] = useMenu();

    const recommends = menu.slice(0,3)
    return (
        <div>
            <SectionTitle heading="Chef Recommends" subHeading="Should Try" ></SectionTitle>
            <div className="grid grid-cols-3 gap-2 ">
                {
                    recommends.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default Recommends;
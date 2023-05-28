import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import ItemCard from "../../Shared/ItemCard";
import Btn from "../../Components/Btn";


const Menu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            // console.log(data)
            const popular = data.filter(item => item.category === "popular");
            setMenu(popular);
            // console.log(popular)
            
            
        })
    },[])
    // console.log(menu)
    return (
        <div>
            <SectionTitle heading="From Our Menu" subHeading="Check it out"></SectionTitle>
             <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
                {
                    menu.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
        </div>
        <Btn btn="View Full Menu"></Btn>
        </div>

    );
};

export default Menu;
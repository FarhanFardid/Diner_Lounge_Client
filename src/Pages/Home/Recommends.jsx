import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import FoodCard from "../../Shared/FoodCard";


const Recommends = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            // console.log(data)
            const recommends = data.slice(0,3)
            console.log(recommends)
            setMenu(recommends)
            
        })
    },[])
    console.log(menu)
    return (
        <div>
            <SectionTitle heading="Chef Recommends" subHeading="Should Try" ></SectionTitle>
            <div className="grid grid-cols-3 gap-2 ">
                {
                    menu.map(mi => <FoodCard mi={mi} key={mi._id}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default Recommends;
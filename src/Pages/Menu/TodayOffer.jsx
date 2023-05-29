import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import ItemCard from "../../Shared/ItemCard";
import Btn from "../../Components/Btn";


const TodayOffer = () => {
    const [offers,setOffers] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then (res=> res.json())
        .then (data => {
            const offer = data.filter(dt => dt.category === "offered")
            // console.log(offer);
            setOffers(offer);
         
        })
    },[])
    return (
        <div>
             <SectionTitle heading="Today's Offer" subHeading="Don't miss"></SectionTitle>
             <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
                {
                    offers.map(offer=> <ItemCard key={offer._id} item={offer}></ItemCard> )
                }
             </div>
             <Btn btn="Order Your Favorite Food"></Btn>
        </div>
    );
};

export default TodayOffer;
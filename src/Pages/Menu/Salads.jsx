import { useEffect, useState } from "react";
import Btn from "../../Components/Btn";
import CommonBanner from "../../Shared/CommonBanner";
import ItemCard from "../../Shared/ItemCard";
import saladBan from '../../assets/menu/salad-bg.jpg'

const Salads = () => {
    const [salads,setSalads] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            // console.log(data);
            const salad = data.filter(dt=> dt.category === 'salad');
            setSalads(salad)
            // console.log(salad);
            
        })
    },[])
    return (
        <div>
        <CommonBanner img={saladBan} heading="Salads" content="Elevate your greens game at Bistro Boss: Our vibrant salads menu showcases a medley of farm-fresh ingredients, crisp vegetables, and delightful dressings, delivering a burst of flavors and wholesome goodness in every refreshing bite" size = "null" ></CommonBanner>
        <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
          {
              salads.map(salad=> <ItemCard key={salad._id} item={salad}></ItemCard> )
          }

       </div>
       <Btn btn="Order Your Favorite Food"></Btn>
  </div>
    );
};

export default Salads;
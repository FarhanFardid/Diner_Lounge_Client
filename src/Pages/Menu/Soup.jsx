import { useEffect, useState } from 'react';
import CommonBanner from '../../Shared/CommonBanner';
import soupBan from '../../assets/menu/soup-bg.jpg'
import ItemCard from '../../Shared/ItemCard';
import Btn from '../../Components/Btn';

const Soup = () => {
    const [soups,setSoups] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then (res=> res.json())
        .then (data => {
            // console.log(data)
            const soup =data.filter(dt=> dt.category === "soup")
            setSoups(soup)
      
        })
    },[])
    return (
        <div>
        <CommonBanner img={soupBan} heading="Soups" content="Savor warmth and comfort with Bistro Boss' soul-soothing soup menu: From creamy classics to hearty broths, our carefully crafted soups are infused with flavors that will nourish your senses and leave you craving for more" size = "null" ></CommonBanner>
        <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
          {
              soups.map(soup=> <ItemCard key={soup._id} item={soup}></ItemCard> )
          }

       </div>
       <Btn btn="Order Your Favorite Food"></Btn>
  </div>
    );
};

export default Soup;
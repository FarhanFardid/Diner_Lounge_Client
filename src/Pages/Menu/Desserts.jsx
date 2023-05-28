import { useEffect, useState } from "react";
import Btn from "../../Components/Btn";
import CommonBanner from "../../Shared/CommonBanner";
import ItemCard from "../../Shared/ItemCard";
import dessertBan from '../../assets/menu/dessert-bg.jpeg'


const Desserts = () => {
    const[desserts,setDesserts]= useState([]);
    useEffect(()=>{
        fetch('dessert.json')
        .then(res=>res.json())
        .then(data => 
        {
            // console.log(data)
            // const dessert = data.filter(dt=> dt.category === 'dessert')
            // setDesserts(dessert)
            // console.log(dessert);
            setDesserts(data)
        })
    },[])
    return (
        <div>
        <CommonBanner img={dessertBan} heading="Desserts" content="Indulge your sweet tooth at Bistro Boss: Our heavenly desserts menu is a symphony of decadent delights, featuring irresistible cakes, velvety mousses, and divine confections that will transport you to a state of dessert euphoria" size = "null" ></CommonBanner>
        <div className="grid md:grid-cols-2 gap-2 p-3 mb-3">
          {
              desserts.map(dessert=> <ItemCard key={dessert._id} item={dessert}></ItemCard> )
          }

       </div>
       <Btn btn="Order Your Favorite Food"></Btn>
  </div>
    );
};

export default Desserts;
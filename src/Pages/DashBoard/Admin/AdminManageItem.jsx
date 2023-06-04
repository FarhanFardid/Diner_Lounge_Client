import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import { useEffect, useState } from "react";
import MenuTable from "./MenuTable";


const AdminManageItem = () => {
    <Helmet>
    <title>Bistro Boss | Manage Items</title>
   
  </Helmet>
  const [menu,setMenu] = useState([]);

       useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then (res=>res.json())
        .then(data=>{
            console.log(data)
            setMenu(data)
        })
       },[])

 
  
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up!"></SectionTitle>
            <h2 className="text-2xl font-medium w-full text-center">Total Menu Items: {menu.length}</h2>

            <div className="m-4">
            <div className="overflow-x-auto">
  <table className="table mx-auto w-full m-5">
    
    <thead>
      <tr>
        <th>
         Item No.
        </th>
        <th>Item Image</th>
        <th>item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    
   {
    menu.map((item,index)=><MenuTable key={item._id} item={item} index={index}></MenuTable>)
   }
    
  </table>
</div>
            </div>
        </div>
    );
};

export default AdminManageItem;
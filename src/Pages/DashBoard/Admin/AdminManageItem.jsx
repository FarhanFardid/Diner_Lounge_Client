import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";

import MenuTable from "./MenuTable";
import useMenu from "../../../Hooks/useMenu";


const AdminManageItem = () => {
    <Helmet>
    <title>Bistro Boss | Manage Items</title>
   
  </Helmet>
  const [menu, ,refetch] = useMenu();  //   As returning in array so indexing is important


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
    menu.map((item,index)=><MenuTable key={item._id} item={item} index={index} refetch={refetch}></MenuTable>)
   }
    
  </table>
</div>
            </div>
        </div>
    );
};

export default AdminManageItem;
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";

import MenuTable from "./MenuTable";
import useMenu from "../../../Hooks/useMenu";

const AdminManageItem = () => {

  const [menu, refetch] = useMenu(); //   As returning in array so indexing is important

  return (

    <div>
          <Helmet>
    <title>Diner Lounge | Admin Manage Menu Items </title>
  </Helmet>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up!"
      ></SectionTitle>
      <h2 className="text-2xl font-medium w-full text-center">
        Total Menu Items: {menu.length}
      </h2>

      <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
              <tr>
                <th className="font-bold text-center">Item No.</th>
                <th className="font-bold text-center">Item Image</th>
                <th className="font-bold text-center">item Name</th>
                <th className="font-bold text-center">Price</th>
                <th className="font-bold text-center">Update</th>
                <th className="font-bold text-center">Delete</th>
              </tr>
            </thead>

            {menu.map((item, index) => (
              <MenuTable
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
              ></MenuTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminManageItem;

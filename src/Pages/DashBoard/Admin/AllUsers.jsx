import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import UserTable from "./UserTable";


const AllUsers = () => {
    const { data : user =[], refetch } = useQuery(['users'], async()=>{
        const response = await fetch('http://localhost:5000/users')
        return response.json()
    })
    return (
        <div>
            <SectionTitle heading="Manage All User" subHeading="Available Users"></SectionTitle>
            <h2 className="text-2xl font-medium w-full text-center">Total Users: {user.length}</h2>
            <div className="m-4">
            <div className="overflow-x-auto">
  <table className="table mx-auto w-full m-5">
    
    <thead>
      <tr>
        <th>
          No.
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    
   {
    user.map((p,index)=><UserTable key={p._id} person={p} index={index} refetch={refetch}></UserTable>)
   }
    
  </table>
</div>
            </div>

        </div>
    );
};

export default AllUsers;
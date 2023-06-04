import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import UserTable from "./UserTable";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
  
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
    const { data : users =[], refetch } = useQuery(['users'], async()=>{
      // without axiosSecure
    //     const response = await fetch('http://localhost:5000/users' , {
    //       headers: {
    //         authorization: `bearer ${token}`
    //       }
    //     })
    //     return response.json()

    // with axiosSecure
    const response = await axiosSecure.get('/users') 
    return response.data

    },
    )
    return (
        <div>
          <Helmet>
    <title>Bistro Boss | All Users</title>
  </Helmet>
            <SectionTitle heading="Manage All User" subHeading="Available Users"></SectionTitle>
            <h2 className="text-2xl font-medium w-full text-center">Total Users: {users.length}</h2>
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
    users.map((p,index)=><UserTable key={p._id} person={p} index={index} refetch={refetch}></UserTable>)
   }
    
  </table>
</div>
            </div>

        </div>
    );
};

export default AllUsers;
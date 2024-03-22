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
    //     const response = await fetch('https://diner-lounge-server.vercel.app/users' , {
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
    <title>Diner Lounge | All Users</title>
  </Helmet>
            <SectionTitle heading="Manage All User" subHeading="Available Users"></SectionTitle>
            <h2 className="text-2xl font-medium w-full text-center">Total Users: {users.length}</h2>
            <div className="m-4">
            <div className="overflow-x-auto">
  <table className="table mx-auto w-full m-5">
    
    <thead>
      <tr>
        <th className="text-bold text-center">
          No.
        </th>
        <th className="text-bold text-center">Name</th>
        <th className="text-bold text-center">Email</th>
        <th className="text-bold text-center">Role</th>
        <th className="text-bold text-center">Action</th>
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
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
                <Helmet>
        <title>Diner Lounge | User Dashboard Home</title>
       
      </Helmet>
            
            <SectionTitle heading={`Welcome Back ${user?  user.displayName : " "}`} subHeading="Your Dashboard "></SectionTitle>

            <h3 className="text-center text-2xl font-medium p-3">This Page is under Implementation.... Updating Soon...</h3>
               {/* TODO: Implement user home details */}
        </div>
    );
};

export default UserHome;
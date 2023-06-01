import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
                <Helmet>
        <title>Bistro Boss | User DashBoard</title>
       
      </Helmet>
            
            <SectionTitle heading={`Welcome Back ${user?  user.displayName : " "}`} subHeading="Your Dashboard "></SectionTitle>
        </div>
    );
};

export default UserHome;
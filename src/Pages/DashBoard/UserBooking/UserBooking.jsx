import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const UserBooking = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | My Bookings</title>

</Helmet>
    
    <SectionTitle heading="My Bookings" subHeading="Excellent Ambience"></SectionTitle>
    
    <h3 className="text-center text-2xl font-medium p-3">This Page is under Implementation.... Updating Soon...</h3>
       {/* TODO: Implement user Bookings */}
</div>
    );
};

export default UserBooking;
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const UserBooking = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | My Bookings</title>

</Helmet>
    
    <SectionTitle heading="My Bookings" subHeading="Excellent Ambience"></SectionTitle>
</div>
    );
};

export default UserBooking;
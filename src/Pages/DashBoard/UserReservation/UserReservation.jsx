import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const UserReservation = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | Reservation</title>

</Helmet>
    
    <SectionTitle heading="Book a Table?" subHeading="Reservation"></SectionTitle>
    
    <h3 className="text-center text-2xl font-medium p-3">This Page is under Implementation.... Updating Soon...</h3>
       {/* TODO: Implement user reservation process */}
</div>
    );
};

export default UserReservation;
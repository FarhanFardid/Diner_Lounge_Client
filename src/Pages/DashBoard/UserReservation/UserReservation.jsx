import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const UserReservation = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | Reservation</title>

</Helmet>
    
    <SectionTitle heading="Book a Table?" subHeading="Reservation"></SectionTitle>
</div>
    );
};

export default UserReservation;
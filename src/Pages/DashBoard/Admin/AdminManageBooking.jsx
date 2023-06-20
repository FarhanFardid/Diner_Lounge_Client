import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const AdminManageBooking = () => {
    return (
        <div>
              <Helmet>
<title>Diner Lounge | Admin Booking Manage</title>

</Helmet>
<SectionTitle
        heading="Manage All Bookings"
        subHeading="At a Glance"
      ></SectionTitle>
        </div>
    );
};

export default AdminManageBooking;

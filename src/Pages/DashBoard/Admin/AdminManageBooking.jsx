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

      <h3 className="text-center text-2xl font-medium p-3">Booking Page is under Implementation.... Updating Soon...</h3>
         {/* TODO: Implement admin manage bookings */}
        </div>
    );
};

export default AdminManageBooking;

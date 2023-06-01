import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const UserPayment = () => {
    return (
        <div>
        <Helmet>
<title>Bistro Boss | Payment History</title>

</Helmet>
    
    <SectionTitle heading="Payment History" subHeading="At a Glance"></SectionTitle>
</div>
    );
};

export default UserPayment;
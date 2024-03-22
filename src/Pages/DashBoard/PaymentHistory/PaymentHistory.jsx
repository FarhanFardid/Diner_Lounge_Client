
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle';

const PaymentHistory = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | Payment History</title>

</Helmet>
    
    <SectionTitle heading="Payment History" subHeading="At a Glance"></SectionTitle>
    
    <h3 className="text-center text-2xl font-medium p-3">This Page is under Implementation.... Updating Soon...</h3>
    {/* TODO: Implement user payment history */}
</div>
    );
};

export default PaymentHistory;

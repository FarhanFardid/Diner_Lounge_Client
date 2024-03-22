import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";


const UserReview = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | User Review</title>

</Helmet>
    
    <SectionTitle heading="Give a Review" subHeading="Sharing is Caring"></SectionTitle>
    
    <h3 className="text-center text-2xl font-medium p-3">This Page is under Implementation.... Updating Soon...</h3>
       {/* TODO: Implement user review system*/}
</div>
    );
};

export default UserReview;
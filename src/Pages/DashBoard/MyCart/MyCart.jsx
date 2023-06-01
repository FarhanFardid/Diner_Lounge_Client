import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";

const MyCart = () => {
    return (
        <div>
                <Helmet>
        <title>Bistro Boss | My Cart</title>
       
      </Helmet>
            
            <SectionTitle heading="Wanna Add More?" subHeading="My Cart"></SectionTitle>
        </div>
    );
};

export default MyCart;

import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Shared/CommonBanner";
import banner from '../../assets/shop/banner2.jpg'


const OrderFood = () => {
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Order Food</title>
       
      </Helmet>
      <CommonBanner img={banner} size='big' content="Order Food Easily at Bistro Boss. Bringing convenience to your fingertips. With just a few taps, you can enjoy a delectable meal from their diverse menu" heading="Order Food"></CommonBanner>
        </div>
    );
};

export default OrderFood;
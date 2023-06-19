import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import useCart from "../../../Hooks/useCart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);
  return (
    <div>
      <Helmet>
        <title>Diner Lounge | My Cart</title>
      </Helmet>

      <SectionTitle
        heading="Wanna Add More?"
        subHeading="My Cart"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-3 p-3 w-full items-center justify-center">
        <h2 className="text-2xl font-medium w-full text-center">
          Total orders: {cart.length}
        </h2>
        <h4 className="text-xl font-semibold w-full text-center">
          Total Price: ${total}{" "}
        </h4>
        <Link to="/dashboard/userPayment"><button className="btn btn-md w-24 bg-slate-800 mx-auto"> Pay </button></Link>
      </div>
      <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
              <tr>
                <th>Item No.</th>
                <th>Item Image</th>
                <th>item Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>

            {cart.map((item, index) => (
              <CartItem
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
              ></CartItem>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

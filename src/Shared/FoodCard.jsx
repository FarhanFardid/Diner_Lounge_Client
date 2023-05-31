import { Link, useLocation, useNavigate } from "react-router-dom";
import Btn from "../Components/Btn";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


//  To Do: Food Details and Add to cart page redirects

const FoodCard = ({ item, display }) => {
  const { image, name, recipe, price,_id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCart = (item) => {
   console.log(item)
    if (user) {
      const cartItem = {foodItemId:_id, name, image, price, email:user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Food Added to Cart Successfully ",
              icon: "success",
              confirmButtonText: "Cool",
            });
          } 
        });
    }else {
      Swal.fire({
        title: "Please, login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login",{state : {from : location}});
        }
      });
    }
  };
  

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10 relative">
          <span className="absolute top-14 text-sm right-12 bg-black text-white p-1 rounded-md">
            {`${display === "show" ? "$" + price : ""}`}
          </span>
          <img
            src={image}
            alt="food recipe"
            className="rounded-xl h-[300px] w-[424px]"
          />
        </figure>
        <div className="card-body items-center text-center h-[275px] ">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="p-1 w-full ">{recipe}</p>

          <div className="card-actions   bottom-1 my-1   ">
            {display === "show" ? (
              <button
                onClick={() => handleAddCart(item)}
                className="font-bold btn-outline p-2 rounded-md mb-5 border-0 border-b-2  border-black bg-slate-100"
              >
                Add To Cart
              </button>
            ) : (
              <Link to="/order/special">
                <Btn btn="Order Now"> </Btn>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

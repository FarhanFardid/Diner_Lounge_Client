import { Link } from "react-router-dom";
import Btn from "../Components/Btn";

//  To Do: Food Details and Add to cart page redirects

const FoodCard = ({item,display}) => {
    const {image,name,recipe,price} = item;
    const handleAddCart= (item) =>{
       console.log(item);
    }
    // console.log(price, display);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10 relative">
    <span className="absolute top-14 text-sm right-12 bg-black text-white p-1 rounded-md">{
              `${display === 'show'? '$'+price :""}`
      }
      </span>
    <img src={image} alt="food recipe" className="rounded-xl h-[300px] w-[424px]" />
  </figure>
  <div className="card-body items-center text-center h-[275px] ">
    <h2 className="card-title font-bold">{name}</h2>
    <p className="p-1 w-full ">{recipe}</p>
   
    <div className="card-actions   bottom-1 my-1   ">
    
      { display === 'show' ?
       <button onClick={()=> handleAddCart(item)} className="font-bold btn-outline p-2 rounded-md mb-5 border-0 border-b-2  border-black bg-slate-100">Add To Cart</button>:
      <Link to="/order/special" ><Btn btn="Order Now"> </Btn></Link> 
      
      }
    </div>
    
    </div>
</div>
        </div>
    );
};

export default FoodCard;
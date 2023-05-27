import Btn from "../Components/Btn";


const FoodCard = ({mi}) => {
    const {image,name,recipe} = mi;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={image} alt="food recipe" className="rounded-xl h-[300px] w-[424px]" />
  </figure>
  <div className="card-body items-center text-center  ">
    <h2 className="card-title">{name}</h2>
    <p className="p-1 w-full h-[100px]">{recipe}</p>
   
    <div className="card-actions   bottom-3 my-3   ">
      {/* <button className=" btn-outline p-2 border-b-2 rounded-lg border-red-400">Add To Cart</button> */}
      <Btn btn="Add To Cart"> </Btn>
    </div>
    
    </div>
</div>
        </div>
    );
};

export default FoodCard;
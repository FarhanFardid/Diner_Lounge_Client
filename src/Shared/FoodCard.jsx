

const FoodCard = ({mi}) => {
    const {image,name,_id,recipe} = mi;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={image} alt="food recipe" className="rounded-xl h-[300px] w-[424px]" />
  </figure>
  <div className="card-body items-center text-center relative ">
    <h2 className="card-title">{name}</h2>
    <p className="p-1">{recipe}</p>
  
    <div className="card-actions   bottom-2  absolute top-20">
      <button className="btn p-3 ">Add To Cart</button>
    </div>
    </div>
</div>
        </div>
    );
};

export default FoodCard;


const ItemCard = ({item}) => {
    const {image,name,price,recipe} = item;
    return (
        <div className="w-full h-[105px] flex items-center justify-center">
            <img src={image} alt="item img" className="h-[104px] w-[118px] p-1 " style={{"borderRadius" : "0px 300px 300px 300px"}} />
            <div className="p-2"><h3 className="font-bold text-lg">{name}</h3>
            <p>{recipe}</p></div>
            <p className="p-1 text-yellow-700">${price}</p>
        </div>
    );
};

export default ItemCard;
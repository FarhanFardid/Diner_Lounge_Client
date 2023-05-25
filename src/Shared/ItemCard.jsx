

const ItemCard = ({item}) => {
    const {image,name,price,recipe} = item;
    return (
        <div>
            <img src={image} alt="item img" />
            <div><h3>{name}</h3>
            <p>{recipe}</p></div>
            <p>{price}</p>
        </div>
    );
};

export default ItemCard;
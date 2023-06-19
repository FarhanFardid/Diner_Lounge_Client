import SectionTitle from "../../Shared/SectionTitle";
import featured from '../../assets/home/featured.jpg';


const Featured = () => {
    return (
        <div className="text-white" style={{"backgroundImage" : `url(${featured})` , "backgroundAttachment" : "fixed"}}>
            <SectionTitle heading="From Our Menu" subHeading="Check it out"></SectionTitle>

            <div className="flex p-20 items-center justify-center bg-black bg-opacity-30">
                <div className="w-full p-16">  <img src={featured} alt="featured image" className="" /></div>
                <div className="w-full  p-16 ">
                    <p>27 May, 2023</p>
                    <h3>Where Can I Get Some?</h3>
                    <p>
Experience a fiery delight with our featured item at Diner Lounge Restaurant: the `Spicy Shrimp Stick`. Succulent shrimp marinated in a tantalizing blend of spices, skewered and grilled to perfection. Each bite delivers a burst of flavor, combining the smoky char from the grill with the zing of our secret spicy sauce. Served with a side of cool cucumber salad to balance the heat. </p>
                </div>
              
            </div>
        </div>
    );
};

export default Featured;
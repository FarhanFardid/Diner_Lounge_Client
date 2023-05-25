import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ban1 from '../../assets/home/01.jpg'
import ban2 from '../../assets/home/02.jpg'
import ban3 from '../../assets/home/03.png'
import ban4 from '../../assets/home/04.jpg'
import ban5 from '../../assets/home/05.png'
import ban6 from '../../assets/home/06.png'
const Banner = () => {
    return (
        <Carousel className="autoPlay infiniteLoop">
        <div>
            <img src={ban1} />
          
        </div>
        <div>
            <img src={ban2} />
       
        </div>
        <div>
            <img src={ban3} />
           
        </div>
        <div>
            <img src={ban4} />
          
        </div>
        <div>
            <img src={ban5} />
       
        </div>
        <div>
            <img src={ban6} />
           
        </div>
    </Carousel>
    );
};

export default Banner;
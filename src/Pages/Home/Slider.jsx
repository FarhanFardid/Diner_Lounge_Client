import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg' 
import slide3 from '../../assets/home/slide3.jpg' 
import slide4 from '../../assets/home/slide4.jpg' 
import slide5 from '../../assets/home/slide5.jpg' 

const Slider = () => {
    return (
        <div className="p-4">
            <SectionTitle heading="Order Online" subHeading="From 11.00 am to 10.00 pm"></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        
      >
        <SwiperSlide><div>
            <img src={slide1} alt="slide1"  className="rounded-md"/>
            <p className="absolute bottom-5 left-24 text-2xl font-medium bg-black p-2 rounded-lg bg-opacity-30 text-white">Salads</p>
            </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={slide2} alt="slide2" className="rounded-md" />
            <p className="absolute bottom-5 left-24 text-2xl font-medium bg-black p-2 rounded-lg bg-opacity-30 text-white">Pizza</p>
            </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={slide3} alt="slide3" className="rounded-md" />
            <p className="absolute bottom-5 left-24 text-2xl font-medium bg-black p-2 rounded-lg bg-opacity-30 text-white">Soup</p>
            </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={slide4} alt="slide4" className="rounded-md" />
            <p className="absolute bottom-5 left-24 text-2xl font-medium bg-black p-2 rounded-lg bg-opacity-30 text-white">Dessert</p>
            </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={slide5} alt="slide5" className="rounded-md" />
            <p className="absolute bottom-5 left-24 text-2xl font-medium bg-black p-2 rounded-lg bg-opacity-30 text-white">Salads</p>
            </div></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;
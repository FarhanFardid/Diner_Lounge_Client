import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from 'react-icons/fa';

import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        // fetch('http://localhost:5000/reviews')
        fetch('https://diner-lounge-server.vercel.app/reviews')
        .then (res=> res.json())
        .then (data => setReviews(data));
    },[])
    return (
        <div>
            <SectionTitle heading="Testimonials" subHeading="What Our Clients Say"></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} >
                {
                reviews.map(review=> <SwiperSlide key={review._id} className="p-20 text-center bg-slate-200 bg-opacity-30" >
                      <Rating
     style={{ maxWidth: 180 }}
      value={review.rating}
      className="mx-auto my-5"
      readOnly
    />
                    <h3 className="text-center"><FaQuoteLeft className="mx-auto h-14 w-14" /></h3>
                    <p className="p-10">{review.details}</p>
                    <h3 className="font-bold text-yellow-600 text-3xl">{review.name}</h3>
                     </SwiperSlide>)
                }
                </Swiper>
        </div>
    );
};

export default Testimonials;
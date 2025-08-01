import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-eight-ruby.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mt-12 mb-6">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-12 md:mx-24 my-8">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="text-6xl pt-6">
                <FaQuoteLeft></FaQuoteLeft>
              </p>
              <p className="py-6">{review.details}</p>
              <h3 className="text-2xl text-yellow-600">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

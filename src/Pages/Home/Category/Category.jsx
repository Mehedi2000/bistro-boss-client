import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-16">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide1} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80 uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide2} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide3} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16   text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide4} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16   text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide5} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16  text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide1} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16  text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide2} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide3} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16   text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide4} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80 uppercase text-center -mt-16   text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-48 md:h-auto w-full" src={slide5} alt="" />
          <h3 className="text-[16px] md:text-3xl opacity-80  uppercase text-center -mt-16  text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper";

import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";
import wave from "../../assets/Banner/wave_bottom.png";
import { Link } from "react-router-dom";

// https://i.ibb.co/WDbfNHn/banner1.jpg
// https://i.ibb.co/LCgzg2W/banner2.jpg
// https://i.ibb.co/vY3QjVC/banner3.gif

const Banner = () => {
  return (
    <div className="mb-40">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[500px] lg:h-[900px]"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[500px] lg:h-[900px] object-cover object-top"
              src={banner1}
              alt=""
            />
            <div className="absolute top-0 lg:top-44 lg:left-32">
              <h1 className="font-nunito text-left text-black text-7xl font-extrabold leading-snug">
                Learn from{" "}
                <span className="text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-3">
                  native speakers
                </span>{" "}
                <br />
                and travel with <span className="text-white">friends</span>{" "}
                <br />
                <span className="text-white bg-gradient-to-l from-orange-500 to-yellow-500 px-3">
                  around the world
                </span>
              </h1>
            </div>
            <div className="absolute bottom-0">
              <img src={wave} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[500px] lg:h-[900px] object-cover object-top"
              src={banner2}
              alt=""
            />
            <div className="absolute top-0 lg:top-44 lg:right-32">
              <h1 className="font-nunito text-left text-white text-7xl font-extrabold leading-snug">
                With Our{" "}
                <span className="text-white bg-gradient-to-l from-orange-500 to-yellow-500 px-3">
                  World Class
                </span>{" "}
                <br /> and Top{" "}
                <span className="text-orange-500">Instructors</span>
              </h1>
            </div>
            <div className="absolute bottom-0">
              <img src={wave} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[500px] lg:h-[900px] object-cover object-center bg-black"
              src={banner3}
              alt=""
            />
            <div className="absolute top-0 lg:top-1/3 lg:right-1/4">
              <h1 className="font-nunito text-left text-white text-7xl font-extrabold leading-snug">
                And{" "}
                <span className="text-white bg-gradient-to-l from-orange-500 to-yellow-500 px-3">
                  Top Notch
                </span>{" "}
                Curriculum
              </h1>
              <Link className="flex justify-center mt-16" to="/signup">
                <button className="btn-primary lg:text-2xl rounded-3xl lg:w-1/3 lg:py-5 tracking-wider">Join Us</button>
              </Link>
            </div>
            <div className="absolute bottom-0">
              <img src={wave} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

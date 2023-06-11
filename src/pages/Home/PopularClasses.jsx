import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-sagor66.vercel.app/classes-sort")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  // console.log(classes);

  return (
    <div className="max-w-7xl mx-auto mb-40">
      <SectionHeader sectionHeader={"Popular classes"}></SectionHeader>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        // pagination={{

        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {classes.map((classItem, i) => (
          <SwiperSlide key={i}>
            <div>
              {
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      className="w-96 h-96 object-cover border-4 rounded-full border-yellow-300"
                      src={classItem.image}
                      alt=""
                    />
                    <div className="absolute bottom-0">
                      <h4 className="font-nunito text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-white px-3 py-1">
                        {classItem.class_name}
                      </h4>
                      <p>
                        by{" "}
                        <span className="font-bold text-orange-400">
                          {classItem.instructor}
                        </span>
                      </p>
                    </div>
                    <p className="bg-green-500 font-bold absolute top-0 right-6 px-2 py-1 text-white">
                      Enrolled: {classItem.total_students}
                    </p>
                  </div>
                  <Link to="/classes">
                    <button className={"rounded-xl w-full mt-6 btn-primary"}>
                      More info
                    </button>
                  </Link>
                </div>
              }
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClasses;

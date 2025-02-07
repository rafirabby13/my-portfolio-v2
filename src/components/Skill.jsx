/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../assets/icons8-skill-100.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Skill = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skill.json")
      .then((res) => res.json())
      .then((datat) => {
        setSkills(datat);
      });
  }, []);

  return (
    <div id="skill" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row items-center gap-4
                  w-fit mx-auto py-10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center border-b-4 w-fit mx-auto pb-2 flex flex-col items-center gap-8">
            <img src={img} alt="" />
            My Skills
          </h2>
        </div>
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        > */}
          <Marquee className="flex">
          {skills.map((skill, index) => (
           
              <div className=" lg:h-[350px] border-2 mr-5
              " key={index}>
                <img className="h-20 md:h-64 w-full" src={skill.image} alt="" />
                <p className="lg:text-2xl text-center py-10 font-semibold text-gray-700 hidden md:flex justify-center">
                  {skill.skill}
                </p>
              </div>
             
          ))}
          </Marquee>
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default Skill;

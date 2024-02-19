import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiGraduateCap } from "react-icons/gi";
import Dcit from "../images/certifications/dict.jpg";
import Dvc from "../images/certifications/bestincapstone.jpg";
import Devfest from "../images/certifications/devfest.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const education = () => {
  return (
    <section className="educ pb-5" id="education">
      <div className="container">
        <div className="row">
          <div className="swiper-col col-lg-6 ">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Parallax, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={
                {
                  delay: 3000, // Set the delay in milliseconds
                  disableOnInteraction: false,
                } // Allow navigation when user interacts with the swiper
              }
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={Dcit} width={"100%"} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Dvc} width={"100%"} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Devfest} width={"100%"} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col p-3">
            <h3 className="educ-h3 mb-5">My Education</h3>
            <ul className="educ-list d-flex flex-column ">
              <li className=" p-2  ">
                <GiGraduateCap className="graduate" size={50} />

                <strong className="title"> GOIT PH (2023-Present)</strong>

                <p className="course">FULLSTACK WEB DEVELOPER</p>
              </li>
              <li className="   p-2  ">
                <GiGraduateCap className="graduate" size={50} />

                <strong className="title">
                  {" "}
                  Davao Vision College (2022-2023)
                </strong>

                <p className="course">
                  Bachelor Of Science In Information Technology
                </p>
              </li>
              <li className=" p-2 ">
                <GiGraduateCap className="graduate" size={50} />
                <strong className="title">
                  {" "}
                  F. Bustamante National Highschool
                </strong>{" "}
                (2017-2018)
                <p className="course">
                  TECH-VOC Livelihood In Computer Systems Servicing
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;

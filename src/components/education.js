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
import { motion } from "framer-motion";
const education = () => {
  return (
    <section className="educ pb-5" id="education">
      <div className="container">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className="swiper-col col-lg-6 "
          >
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
                <img src={Dcit} loading="lazy" width={"100%"} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Dvc} loading="lazy" width={"100%"} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Devfest} loading="lazy" width={"100%"} />
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <div className="col p-3">
            <h3 className="educ-h3 mb-5">My Education</h3>
            <motion.ul
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                ease: "linear",
                staggerChildren: 5,
              }}
              className="educ-list d-flex flex-column "
            >
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className=" p-2  "
              >
                <GiGraduateCap className="graduate" size={50} />

                <strong className="title"> GOIT PH (2023-Present)</strong>

                <p className="course">FULLSTACK WEB DEVELOPER</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="   p-2  "
              >
                <GiGraduateCap className="graduate" size={50} />

                <strong className="title">
                  {" "}
                  Davao Vision College (2022-2023)
                </strong>

                <p className="course">
                  Bachelor Of Science In Information Technology
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className=" p-2 "
              >
                <GiGraduateCap className="graduate" size={50} />
                <strong className="title">
                  {" "}
                  F. Bustamante National Highschool
                </strong>{" "}
                (2017-2018)
                <p className="course">
                  TECH-VOC Livelihood In Computer Systems Servicing
                </p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;

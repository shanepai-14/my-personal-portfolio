import React from "react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Goit from "../images/certifications/goit.jpg";
import Dcit from "../images/certifications/dict.jpg";
import Dvc from "../images/certifications/bestincapstone.jpg";
import Devfest from "../images/certifications/devfest.jpg";
import { motion } from "framer-motion";

const education_list = [
  {
    dates: "2023 – 2024",
    title: "Fullstack Web Developer",
    institution: "GOIT PH · HTML/CSS, JavaScript, React, Node.js",
  },
  {
    dates: "2019 – 2023",
    title: "BS in Information Technology",
    institution: "Davao Vision College",
  },
  {
    dates: "2017 – 2018",
    title: "Tech-Voc Livelihood in Computer Systems Servicing",
    institution: "F. Bustamante National High School",
  },
];

const certifications = [
  { img: Goit, alt: "GoIT Fullstack Developer course completion certificate" },
  { img: Dcit, alt: "DICT certificate" },
  { img: Dvc, alt: "Best in Capstone award certificate" },
  { img: Devfest, alt: "Google DevFest certificate" },
];

const education = () => {
  return (
    <section className="educ" id="education">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="educ-h3 mb-5">Education &amp; Credentials</h3>
            <motion.ul
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                ease: "linear",
                staggerChildren: 5,
              }}
              className="educ-list"
            >
              {education_list.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <span className="educ-date">{item.dates}</span>
                  <strong className="title">{item.title}</strong>
                  <p className="course">{item.institution}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="swiper-col col-lg-6"
          >
            <Swiper
              modules={[Navigation, Pagination, Parallax, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {certifications.map((cert, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={cert.img}
                    loading="lazy"
                    width={"100%"}
                    alt={cert.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default education;

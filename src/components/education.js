import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Parallax ,Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Dcit from "../images/certifications/dict.jpg";
import Dvc from "../images/certifications/bestincapstone.jpg";
import Devfest from "../images/certifications/devfest.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const education = () => {
  return (
    <section className="educ">

      <div className="container ">
        <div className="row">
          <div className="col-6 ">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination,Parallax,Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
          
              pagination={{ clickable: true }}
              autoplay={
            {    delay: 3000, // Set the delay in milliseconds
            disableOnInteraction: false,} // Allow navigation when user interacts with the swiper
              }
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
             
            >
              <SwiperSlide >
                <img src={Dcit } width={"100%"}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Dvc } width={"100%"}/>
              </SwiperSlide>
              <SwiperSlide >
                <img src={Devfest } width={"100%"}/>
              </SwiperSlide>
        
            </Swiper>
          </div>
          <div className="col p-3">
      
            <h3 className="educ-h3">My Education</h3>
            <ul className="educ-list mb-5">
              <li className="  mb-4">
                <span>
                  <p>
                    <strong>Davao Vision College</strong>(2022-2023)
                  </p>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a libero urna. Pellentesque ac odio purus. Integer finibus
                  mauris a ligula interdum auctor. Vivamus vestibulum pharetra
                  odio, et consectetur nunc consectetur a.
                </p>
                <button className="btn btn-primary rounded-pill">
                  Diploma in Information Tech
                </button>
              </li>
              <li className="mb-4">
                {" "}
                <p>
                  <strong>Davao Vision College</strong>(2022-2023)
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a libero urna. Pellentesque ac odio purus. Integer finibus
                  mauris a ligula interdum auctor. Vivamus vestibulum pharetra
                  odio, et consectetur nunc consectetur a.
                </p>
                <button className="btn btn-primary rounded-pill">
                  Diploma in Information Tech
                </button>
              </li>
            </ul>
          </div>
          </div>
        </div>

    </section>
  );
};

export default education;

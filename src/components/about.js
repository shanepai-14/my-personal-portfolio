import React from "react";
import Downloadcv from "./downloadcv";
import AboutImage from "../images/aboutimg.jpg";
import { Facebook } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { LeftRight, AboutContainer, aboutItem } from "./animation/animation";
const about = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container p-5">
        <div className="row myself">
          <div className="col myselft-img">
            <motion.img
              variants={LeftRight}
              initial="hidden"
              whileInView="visible"
              src={AboutImage}
              width={"70%"}
            ></motion.img>
          </div>
          <motion.div
            variants={AboutContainer}
            initial="hidden"
            whileInView="visible"
            className="col d-flex flex-column justify-content-center"
          >
            <img
              src={AboutImage}
              width={"70%"}
              loading="lazy"
              className="myself-img-about"
            ></img>
            <motion.h3
              variants={aboutItem}
              initial="hidden"
              whileInView="visible"
            >
              ABOUT ME
            </motion.h3>
            <motion.h1
              className="mb-5"
              variants={aboutItem}
              initial="hidden"
              whileInView="visible"
            >
              Creation timelines for the standard lorem ipsum
            </motion.h1>
            <motion.p
              className="mb-5"
              variants={aboutItem}
              initial="hidden"
              whileInView="visible"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </motion.p>
            <ul className="about-list d-flex flex-wrap w-100 mb-4">
              <li>Shane F. Enriquez</li>
              <li>shaneenriquez50gmail.com</li>
              <li>Tibungco, Davao City</li>
              <li>0991-373-1732</li>
            </ul>
            <div className="d-flex gap-4 about-links align-items-center justify-content-between">
              <Downloadcv />
              <strong>
                <HiOutlineChevronDoubleRight className="arrow-left" />
              </strong>
              <p className="mb-0">Follow me</p>
              <ul className="list-unstyled about-socmed justify-content-between mb-0 gap-5">
                <li>
                  <a href="https://github.com/shanepai-14" target="_blank">
                    {" "}
                    <Github color="black" size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shane-enriquez-2927a1254/"
                    target="_blank"
                  >
                    {" "}
                    <Linkedin color="#0C64C5" size={28} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/pee.poy.98" target="_blank">
                    {" "}
                    <Facebook color="#0866FF" size={28} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default about;

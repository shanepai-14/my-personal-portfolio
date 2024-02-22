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
              I'm Shane Enriquez<br></br> a Web Developer
            </motion.h1>
            <motion.p
              className="mb-5"
              variants={aboutItem}
              initial="hidden"
              whileInView="visible"
            >
              I'm always eager to learn and grow, constantly seeking new
              challenges and opportunities to push my boundaries and contribute
              to meaningful projects. Whether you're looking for a skilled
              developer to bring your vision to life or a passionate
              collaborator to join your team, I'm confident in my ability to
              deliver exceptional results.
            </motion.p>
            <ul className="about-list d-flex flex-wrap w-100 mb-4">
              <motion.li
                variants={aboutItem}
                initial="hidden"
                whileInView="visible"
              >
                Shane F. Enriquez
              </motion.li>
              <motion.li
                variants={aboutItem}
                initial="hidden"
                whileInView="visible"
              >
                shaneenriquez50gmail.com
              </motion.li>
              <motion.li
                variants={aboutItem}
                initial="hidden"
                whileInView="visible"
              >
                Tibungco, Davao City
              </motion.li>
              <motion.li
                variants={aboutItem}
                initial="hidden"
                whileInView="visible"
              >
                0991-373-1732
              </motion.li>
            </ul>
            <div className="d-flex gap-4 about-links align-items-center justify-content-between">
              <Downloadcv />
              <motion.strong
                variants={aboutItem}
                initial="hidden"
                whileInView="visible"
              >
                <HiOutlineChevronDoubleRight className="arrow-left" />
              </motion.strong>
              <p className="mb-0">Follow me</p>
              <ul className="list-unstyled about-socmed justify-content-between mb-0 gap-5">
                <motion.li
                  variants={aboutItem}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a href="https://github.com/shanepai-14" target="_blank">
                    {" "}
                    <Github color="black" size={28} />
                  </a>
                </motion.li>
                <motion.li
                  variants={aboutItem}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a
                    href="https://www.motion.linkedin.com/in/shane-enriquez-2927a1254/"
                    target="_blank"
                  >
                    {" "}
                    <Linkedin color="#0C64C5" size={28} />
                  </a>
                </motion.li>
                <motion.li
                  variants={aboutItem}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a href="https://www.facebook.com/pee.poy.98" target="_blank">
                    {" "}
                    <Facebook color="#0866FF" size={28} />
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default about;

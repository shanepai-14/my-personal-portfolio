import React from "react";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useInView, motion } from "framer-motion";
import { HeaderAnimation, itemVariants } from "./animation/animation";
const Footer = () => {
  return (
    <footer className="">
      <div className="container position-relative footer ">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
            type: "tween",
          }}
          className=" contact-me row  "
          id="contact-me "
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "tween",
            }}
            className="col contact-one"
          >
            <h1>Have a project idea. Let's work together!</h1>
            <p>
              As a web developer, I am passionate about turning ideas into
              reality. Whether you need a new website, an e-commerce platform,
              or a custom web application, I have the skills and expertise to
              bring your vision to life. Let's collaborate and create something
              amazing together!
            </p>
          </motion.div>
          <div className="col ">
            <motion.div
              initial={{
                x: 20,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 0.3,
                type: "tween",
              }}
              className="d-flex align-items-center contact-item p-3 mb-3"
            >
              <MdOutlineEmail size={40} className="me-2" />
              <div>
                <p className="mb-0">Email Me</p>
                <p className="mb-0 contact-details">
                  shaneenriquez50@gmail.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                x: 20,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 0.5,
                type: "tween",
              }}
              className="d-flex align-items-center contact-item p-3"
            >
              <FiPhone size={40} className="me-2" />
              <div>
                <p className="mb-0">Contact Me</p>
                <p className="mb-0 contact-details">0991-373-1732</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="row  quick-links">
          <div className="col-12 col-md-6">
            <motion.h1
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
              }}
              className="mb-3"
            >
              Shanepai
            </motion.h1>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
              className="shanepai-p"
            >
              My journey in web development began when I enrolled as a BSIT
              student. Since then, I've honed my skills and expanded my
              knowledge to encompass various technologies and frameworks,
              including React, Laravel, Next.js, Tailwind, and Firebase.
            </motion.p>
            <motion.ul
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
              }}
              className="list-unstyled social-links  mb-0 gap-3 mt-4"
            >
              <li>
                <a href="https://github.com/shanepai-14" target="_blank">
                  <Github color="black" size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shane-enriquez-2927a1254/"
                  target="_blank"
                >
                  <Linkedin color="black" size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/pee.poy.98" target="_blank">
                  <Facebook color="black" size={28} />
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="col-12 col-md-3">
            <div className="footer-list-div">
              {" "}
              <motion.h5
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                }}
                className="mb-4"
              >
                Quick Links
              </motion.h5>
              <ul className="footer-list p-0 d-flex row-gap-3">
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                  }}
                >
                  <a href="#home">Home</a>
                </motion.li>
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3,
                  }}
                >
                  <a href="#about">About me</a>
                </motion.li>
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  <a href="#projects">Projects</a>
                </motion.li>
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <a href="#contact-me">Contact me</a>
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="col col-md-12 col-lg">
            <motion.h5
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
              }}
              className="mb-4"
            >
              Intership
            </motion.h5>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
            >
              I am a web developer seeking an internship to gain hands-on
              experience and refine my skills. If you are looking for a
              motivated intern to join your team, let's connect and discuss how
              I can contribute to your organization.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse dolor omnis nam laudantium accusantium quaerat
              commodi fuga dignissimos deleniti ipsa sint exercitationem,
              laboriosam a impedit est dolores voluptatibus vero?
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
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse dolor omnis nam laudantium accusantium quaerat
              commodi fuga dignissimos deleniti ipsa s
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse dolor omnis nam laudantium accusantium quaerat
              commodi fuga dignissimos deleniti ipsa sint exercitationem,
              laboriosam a impedit est dolores voluptatibus vero?
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

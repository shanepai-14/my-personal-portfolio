import React, { useEffect, useRef } from "react";
import HeroImage from "../images/hero-image.png";
import HeroTablet from "../images/hero-image -tablet.png";
import Laravel from "../images/icons/laravel1.svg";
import Vscode from "../images/icons/vscode.svg";
import Javascript from "../images/icons/logo-javascript.svg";
import Reactlogo from "../images/icons/react-2.svg";
import Flutter from "../images/icons/flutter-logo.svg";
import Downloadcv from "./downloadcv";
import { FiPhone } from "react-icons/fi";
import {
  fadeInOutRightToLeft,
  fadeInOutLeftToRight,
  fadeInOutUpToDown,
  fadeInOutDownToUp,
  item,
  listVariants,
  itemVariants,
} from "../components/animation/animation.js";
import { useInView, motion } from "framer-motion";
const FloatingIcon = ({ icon }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    // Generate a random duration between 2 and 5 seconds
    const duration = Math.random() * (6 - 3) + 3;

    // Apply the animation styles to the icon
    if (iconRef.current) {
      iconRef.current.style.animation = `ani-float ${duration}s infinite ease-in-out`;
    }
  }, []);

  return (
    <img
      src={icon}
      ref={iconRef}
      className="shadow-sm"
      width={50}
      height={50}
      style={{ background: "white", padding: "7px" }}
    ></img>
  );
};
const techstack = [
  {
    icon: Laravel,
  },
  {
    icon: Vscode,
  },
  {
    icon: Javascript,
  },
  {
    icon: Reactlogo,
  },
  {
    icon: Flutter,
  },
];
const Hero = () => {
  const ref = useRef(null);
  const inView = useInView({ threshold: 0.5 }); // Adjust threshold as needed
  const [rotate, setRotate] = React.useState(false);
  useEffect(() => {
    if (inView.isIntersecting) {
      // Animate element after it comes into view
    }
  }, [inView.isIntersecting]);

  return (
    <section className="hero" id="home">
      <div className="container h-100">
        <div className="row h-100">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="col hero-title d-flex flex-column justify-content-center align-items-start h-100"
          >
            <motion.h1
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              I'm Shane Enriquez <br></br>a{" "}
              <span className="webdev">Web Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </motion.p>
            <ul className="list-unstyled gap-3 d-flex justify-content-center">
              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <a href="#contact-me">
                  <button className="contactbtn">
                    Contact Me <FiPhone />
                  </button>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Downloadcv />
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="col h-100 position-relative  "
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
          >
            {techstack?.length > 0 ? (
              <>
                {techstack.map((icon, index) => (
                  <>
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      className="position-absolute hero-icons"
                    >
                      <FloatingIcon
                        key={index}
                        loading="lazy"
                        icon={icon.icon}
                      />
                    </motion.div>
                  </>
                ))}
              </>
            ) : (
              <div className="empty">
                <h2>No Icon Found</h2>
              </div>
            )}

            {/* <FloatingIcon loading="lazy" icon={Laravel} />
              <FloatingIcon loading="lazy" icon={Vscode} />
              <FloatingIcon loading="lazy" icon={Javascript} />
              <FloatingIcon loading="lazy" icon={Reactlogo} />
              <FloatingIcon loading="lazy" icon={Flutter} /> */}

            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={HeroImage}
              width={"100%"}
              loading="lazy"
              className="object-fit-cover h-100 heroimage"
            ></motion.img>

            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={HeroTablet}
              loading="lazy"
              width={"100%"}
              className="herotablet"
            ></motion.img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

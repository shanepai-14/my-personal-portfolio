import React, { useEffect, useRef } from "react";
import HeroImage from "../images/hero-image.png";
import Downloadcv from "./downloadcv";
import { FiArrowRight } from "react-icons/fi";
import { FaLaravel, FaReact } from "react-icons/fa";
import { SiVisualstudiocode, SiJavascript, SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

const tech_icons = [
  { icon: <FaLaravel />, position: "pos-1" },
  { icon: <SiVisualstudiocode />, position: "pos-2" },
  { icon: <SiJavascript />, position: "pos-3" },
  { icon: <FaReact />, position: "pos-4" },
  { icon: <SiFlutter />, position: "pos-5" },
];

const FloatingIcon = ({ icon, position }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const duration = Math.random() * (6 - 3) + 3;
    if (iconRef.current) {
      iconRef.current.style.animationDuration = `${duration}s`;
    }
  }, []);

  return (
    <motion.div
      ref={iconRef}
      className={`hero-icon-badge ${position}`}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4 }}
      aria-hidden="true"
    >
      {icon}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row hero-row">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-lg-7 hero-content-col"
          >
            <p className="hero-eyebrow">Full-Stack Developer</p>
            <h1>Hi, I'm Shane Enriquez.</h1>
            <p className="hero-lede">
              I build reliable full-stack web applications with React and
              Laravel, from internal business systems and inventory
              platforms to public-facing product sites.
            </p>
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary-cta">
                View Projects <FiArrowRight />
              </a>
              <Downloadcv className="btn-secondary-cta" />
            </div>
            <div className="hero-meta">
              <span className="dot" aria-hidden="true"></span>
              Based in Davao City, Philippines · Open to full-stack roles
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-lg-5 hero-image-col"
          >
            <div className="hero-portrait-wrap">
              {tech_icons.map((tech, index) => (
                <FloatingIcon key={index} icon={tech.icon} position={tech.position} />
              ))}
              <img
                src={HeroImage}
                alt="Portrait of Shane Enriquez"
                className="hero-portrait"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

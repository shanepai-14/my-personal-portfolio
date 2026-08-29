import React from "react";
import AboutImage from "../images/aboutimg.jpg";
import { motion } from "framer-motion";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const About = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-lg-4 d-flex justify-content-center justify-content-lg-start"
          >
            <img
              src={AboutImage}
              alt="Shane Enriquez"
              className="about-portrait"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-lg-8"
          >
            <p className="eyebrow">About</p>
            <h1>Building reliable web products, end to end.</h1>
            <p>
              I'm a full-stack developer working mainly with React and
              Laravel. Over the past few years I've built and maintained
              enterprise systems, inventory and queue-management platforms,
              admin dashboards, and public-facing business websites,
              handling everything from responsive front-end interfaces to
              the Laravel REST APIs behind them.
            </p>
            <p>
              I care about writing code that's easy to maintain and
              interfaces that are genuinely easy to use, and I enjoy working
              closely with the people who'll actually use what I build.
            </p>
            <ul className="about-facts">
              <li>
                <strong>Location</strong>
                <span className="d-flex align-items-center gap-1">
                  <MdOutlineLocationOn /> Davao City, Philippines
                </span>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:shaneenriquez50@gmail.com">
                  <MdOutlineEmail /> shaneenriquez50@gmail.com
                </a>
              </li>
              <li>
                <strong>Availability</strong>
                <span>Open to full-stack roles &amp; freelance work</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

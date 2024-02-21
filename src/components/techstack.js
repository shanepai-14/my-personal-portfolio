import React from "react";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJquery, SiTailwindcss } from "react-icons/si";
import {
  HeaderAnimation,
  headAnimation,
  itemVariants,
} from "./animation/animation";
import { motion, useInView } from "framer-motion";
const TechStack = () => {
  return (
    <section className="tect-stack">
      <div className="container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
          <motion.h1
            className="mb-5"
            variants={headAnimation}
            initial="hidden"
            whileInView="visible"
          >
            Tech Stack
          </motion.h1>
          <motion.ul
            className="list-unstyled w-100 gap-3 d-flex flex-wrap text-center justify-content-between"
            variants={HeaderAnimation}
            initial="hidden"
            whileInView="visible"
          >
            <motion.li variants={itemVariants}>
              <FaLaravel size={50} className="lara" />
              <p>Laravel</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaHtml5 size={50} />
              <p>HTML</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <IoLogoCss3 size={50} />
              <p>CSS</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <IoLogoJavascript size={50} />
              <p>JAVASCRIPT</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaBootstrap size={50} />
              <p>BOOTSTRAP</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <SiTailwindcss size={50} />
              <p>TAILWIND</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaPhp size={50} />
              <p>PHP</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaReact size={50} />
              <p>REACT</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <SiFlutter size={50} />
              <p>FLUTTER</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <SiFirebase size={50} />
              <p>FIREBASE</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <SiMysql size={50} />
              <p>MYSQL</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <SiJquery size={50} />
              <p>JQUERY</p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
export default TechStack;

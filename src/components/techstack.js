import React from "react";
import { Twitter } from "react-bootstrap-icons";
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
import { SiJquery } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="tect-stack">
      <div className="container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
          <h1 className="mb-5">Tech Stack</h1>
          <ul className="list-unstyled gap-5 d-flex flex-wrap text-center">
            <li>
              <FaLaravel size={50} className="lara" />
              <p>Laravel</p>
            </li>
            <li>
              <FaHtml5 size={50} />
              <p>HTML</p>
            </li>
            <li>
              <IoLogoCss3 size={50} />
              <p>CSS</p>
            </li>
            <li>
              <IoLogoJavascript size={50} />
              <p>JAVASCRIPT</p>
            </li>
            <li>
              <FaBootstrap size={50} />
              <p>BOOTSTRAP</p>
            </li>
            <li>
              <FaPhp size={50} />
              <p>PHP</p>
            </li>
            <li>
              <FaReact size={50} />
              <p>REACT</p>
            </li>
            <li>
              <SiFlutter size={50} />
              <p>FLUTTER</p>
            </li>
            <li>
              <SiFirebase size={50} />
              <p>FIREBASE</p>
            </li>
            <li>
              <SiMysql size={50} />
              <p>MYSQL</p>
            </li>
            <li>
              <SiJquery size={50} />
              <p>JQUERY</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default TechStack;

import React from "react";
import HeroImage from "../images/hero-image.png";
import { Facebook } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
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

const about = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <img src={HeroImage} width={500}></img>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h3>ABOUT ME</h3>
            <h1>Creation timelines for the standard lorem ipsum passage</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
            <ul className="about-list d-flex flex-wrap w-100">
              <li> Shane F. Enriquez</li>
              <li>shaneenriquez50gmail.com</li>
              <li>Tibungco, Davao City</li>
              <li>0991-373-1732</li>
            </ul>
            <div className="d-flex gap-4">
              <button>Download CV</button>
              <strong>----</strong>
              <p>Contact me</p>
              <ul className="list-unstyled gap-3">
                <li>
                  <Github color="gray" size={28} />
                </li>
                <li>
                  <Linkedin color="gray" size={28} />
                </li>
                <li>
                  <Facebook color="gray" size={28} />
                </li>
                <li>
                  <Twitter color="gray" size={28} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
          <h1 className="mb-5">Tech Stack</h1>
          <ul className="list-unstyled gap-5 d-flex flex-wrap text-center">
            <li>
              <FaLaravel size={50} />
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

export default about;

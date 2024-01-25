import React from "react";
import HeroImage from "../images/hero-image.png";
import Laravel from "../images/icons/laravel1.svg";
import Vscode from "../images/icons/vscode.svg";
import Javascript from "../images/icons/logo-javascript.svg";
import Reactlogo from "../images/icons/react-2.svg";
import Flutter from "../images/icons/flutter-logo.svg";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
const hero = () => {
  return (
    <section style={{ height: "100dvh" }} className="hero">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col  d-flex flex-column justify-content-center align-items-start h-100">
            <h1 style={{ fontSize: "65px" }}>
              I'm Shane Enriquez <br></br>a <span className="webdev">Web Developer</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <ul className="list-unstyled gap-3 d-flex justify-content-center">
              <li>
                <button className="contactbtn">Contact Me <FiPhone /></button>
              </li>
              <li>
                <button className="downloadcv">
                  Download CV <MdOutlineFileDownload />
                </button>
              </li>
            </ul>
          </div>
          <div className="col h-100 position-relative">
            
            <img src={Laravel} className="position-absolute hero-icons shadow-sm"></img>
            <img src={Vscode} className="position-absolute hero-icons shadow-sm"></img>
            <img src={Javascript} className="position-absolute hero-icons shadow-sm"></img>
            <img src={Reactlogo } className="position-absolute hero-icons shadow-sm"></img>
            <img src={Flutter} className="position-absolute hero-icons shadow-sm"></img>
            <img
              src={HeroImage}
              width={"100%"}
              className="object-fit-cover h-100"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;

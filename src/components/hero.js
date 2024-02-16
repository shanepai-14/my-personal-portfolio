import React, { useEffect, useRef } from "react";
import HeroImage from "../images/hero-image.png";
import Laravel from "../images/icons/laravel1.svg";
import Vscode from "../images/icons/vscode.svg";
import Javascript from "../images/icons/logo-javascript.svg";
import Reactlogo from "../images/icons/react-2.svg";
import Flutter from "../images/icons/flutter-logo.svg";
import Downloadcv from "./downloadcv";
import { FiPhone } from "react-icons/fi";

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
      className="position-absolute hero-icons shadow-sm"
    ></img>
  );
};

const hero = () => {
  return (
    <section className="hero">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col  d-flex flex-column justify-content-center align-items-start h-100">
            <h1>
              I'm Shane Enriquez <br></br>a{" "}
              <span className="webdev">Web Developer</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <ul className="list-unstyled gap-3 d-flex justify-content-center">
              <li>
                <button className="contactbtn">
                  Contact Me <FiPhone />
                </button>
              </li>
              <li>
                <Downloadcv />
              </li>
            </ul>
          </div>
          <div className="col h-100 position-relative">
            <FloatingIcon icon={Laravel} />
            <FloatingIcon icon={Vscode} />
            <FloatingIcon icon={Javascript} />
            <FloatingIcon icon={Reactlogo} />
            <FloatingIcon icon={Flutter} />
            <img
              src={HeroImage}
              width={"100%"}
              className="object-fit-cover h-100 heroimage"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;

import React from "react";
import HeroImage from "../images/hero-image.png";
import { MdOutlineFileDownload } from "react-icons/md";
const hero = () => {
  return (
    <section style={{ height: "100dvh" }}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col  d-flex flex-column justify-content-center align-items-start h-100">
            <h1 style={{ fontSize: "65px" }}>
              I'm Shane Enriquez <br></br>a Web Developer
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <ul className="list-unstyled gap-3 d-flex justify-content-center">
              <li>
                <button>Contact Me</button>
              </li>
              <li>
                <button>
                  Download CV <MdOutlineFileDownload />
                </button>
              </li>
            </ul>
          </div>
          <div className="col h-100">
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

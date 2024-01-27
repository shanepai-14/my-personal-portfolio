import React from "react";
import Downloadcv from "./downloadcv";
import AboutImage from "../images/aboutimg.jpg";
import { Facebook } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";



const about = () => {
  return (
    <section className="about-sec">
      <div className="container p-5">
        <div className="row myself">
          <div className="col">
            <img src={AboutImage} width={"70%"} className="shadow"></img>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h3>ABOUT ME</h3>
            <h1 className="mb-5">
              Creation timelines for the standard lorem ipsum
            </h1>
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
            <ul className="about-list d-flex flex-wrap w-100 mb-4">
              <li>Shane F. Enriquez</li>
              <li>shaneenriquez50gmail.com</li>
              <li>Tibungco, Davao City</li>
              <li>0991-373-1732</li>
            </ul>
            <div className="d-flex gap-4  align-items-center justify-content-between">
              <Downloadcv />
              <strong>
              <HiOutlineChevronDoubleRight />
              </strong>
              <p className="mb-0">Contact me</p>
              <ul className="list-unstyled justify-content-between mb-0 gap-5">
                <li>
                  <Github color="black" size={28} />
                </li>
                <li>
                  <Linkedin color="#0C64C5" size={28} />
                </li>
                <li>
                  <Facebook color="#0866FF" size={28} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;

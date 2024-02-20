import React from "react";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="">
      <div className="container position-relative footer ">
        <div className=" contact-me row  " id="contact-me">
          <div className="col contact-one">
            <h1>Have a project idea. Let's work together!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse dolor omnis nam laudantium accusantium quaerat
              commodi fuga dignissimos deleniti ipsa sint exercitationem,
              laboriosam a impedit est dolores voluptatibus vero?
            </p>
          </div>
          <div className="col ">
            <div className="d-flex align-items-center contact-item p-3 mb-3">
              <MdOutlineEmail size={40} className="me-2" />
              <div>
                <p className="mb-0">Email Me</p>
                <p className="mb-0 contact-details">
                  shaneenriquez50@gmail.com
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center contact-item p-3">
              <FiPhone size={40} className="me-2" />
              <div>
                <p className="mb-0">Contact Me</p>
                <p className="mb-0 contact-details">0991-373-1732</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row  quick-links">
          <div className="col-12 col-md-6">
            <h1 className="mb-3">Shanepai</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse dolor omnis nam laudantium accusantium quaerat
              commodi fuga dignissimos deleniti ipsa s
            </p>
            <ul className="list-unstyled social-links  mb-0 gap-3 mt-4">
              <li>
                <a href="https://github.com/shanepai-14" target="_blank">
                  <Github color="black" size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shane-enriquez-2927a1254/"
                  target="_blank"
                >
                  <Linkedin color="black" size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/pee.poy.98" target="_blank">
                  <Facebook color="black" size={28} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <div className="footer-list-div">
              {" "}
              <h5 className="mb-4">Quick Links</h5>
              <ul className="footer-list p-0 d-flex row-gap-3">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About me</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact-me">Contact me</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-12 col-lg">
            <h5 className="mb-4">Intership</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse dolor omnis nam laudantium accusantium quaerat
              commodi fuga dignissimos deleniti ipsa sint exercitationem,
              laboriosam a impedit est dolores voluptatibus vero?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

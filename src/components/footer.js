import React from "react";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="contact-sec" id="contact-me">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-head"
          >
            <p className="eyebrow">Contact</p>
            <h2>Let's work together</h2>
            <p>
              I'm open to full-time full-stack roles and freelance projects.
              If you need a developer for a new web application or an
              existing one that needs work, feel free to reach out.
            </p>
          </motion.div>
          <div className="contact-actions">
            <a href="mailto:shaneenriquez50@gmail.com" className="btn-primary-cta">
              <MdOutlineEmail /> Email Me
            </a>
            <a href="#projects" className="btn-secondary-cta">
              View My Work
            </a>
          </div>
          <div className="contact-detail-row">
            <FiPhone /> 0991-373-1732
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-inner">
          <p className="footer-copy">
            © {year} Shane Enriquez. All rights reserved.
          </p>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <ul className="footer-social">
            <li>
              <a
                href="https://github.com/shanepai-14"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shane-enriquez-2927a1254/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/pee.poy.98"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

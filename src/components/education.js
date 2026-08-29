import React, { useState } from "react";
import Goit from "../images/certifications/goit.jpg";
import Dict from "../images/certifications/dict.jpg";
import BestInCapstone from "../images/certifications/bestincapstone.jpg";
import Devfest from "../images/certifications/devfest.jpg";
import { motion } from "framer-motion";

const education_list = [
  {
    dates: "2023 – 2024",
    title: "Fullstack Web Developer",
    institution: "GOIT PH · HTML/CSS, JavaScript, React, Node.js",
    certUrl: null,
  },
  {
    dates: "2022 – 2023",
    title: "BS in Information Technology",
    institution: "Davao Vision College",
    certUrl: null,
  },
  {
    dates: "2017 – 2018",
    title: "Tech-Voc Livelihood in Computer Systems Servicing",
    institution: "F. Bustamante National High School",
    certUrl: null,
  },
];

const slides = [
  {
    img: Goit,
    alt: "GoIT Fullstack Developer course completion certificate, 2024",
    caption: "GoIT — Fullstack Developer course (2024)",
  },
  {
    img: Dict,
    alt: "DICT Mobile App Development certificate from DigitalJobsPH",
    caption: "DICT — Mobile App Development (DigitalJobsPH)",
  },
  {
    img: BestInCapstone,
    alt: "Best in Capstone award certificate",
    caption: "Best in Capstone",
  },
  {
    img: Devfest,
    alt: "Google DevFest certificate",
    caption: "Google DevFest",
  },
];

const Education = () => {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  const current = slides[index];

  return (
    <section className="credentials-sec" id="education">
      <div className="container credentials-container">
        <h2>Education &amp; credentials</h2>
        <div className="credentials-grid">
          <div className="credentials-col">
            <ul className="edu-list">
              {education_list.map((item, i) => (
                <li className="edu-row" key={i}>
                  <span className="edu-date">{item.dates}</span>
                  <h3 className="edu-title">{item.title}</h3>
                  <p className="edu-institution">{item.institution}</p>
                  {item.certUrl && (
                    <a
                      className="edu-cert-link"
                      href={item.certUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Certificate ID 33496 (PDF) ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="credentials-col">
            <div className="cert-header">
              <span className="cert-label">Certificates</span>
              <div className="cert-nav">
                <button
                  type="button"
                  className="cert-nav-btn"
                  onClick={goPrev}
                  aria-label="Previous certificate"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="cert-nav-btn"
                  onClick={goNext}
                  aria-label="Next certificate"
                >
                  →
                </button>
              </div>
            </div>

            <a
              className="cert-frame"
              href={current.img}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open full size: ${current.caption}`}
            >
              <motion.img
                key={index}
                src={current.img}
                alt={current.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            </a>

            <div className="cert-footer">
              <span className="cert-caption">{current.caption}</span>
              <div className="cert-dots">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`cert-dot ${i === index ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Show certificate ${i + 1}: ${slide.caption}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from "react";
import { motion } from "framer-motion";
import { ProjectVariants, itemVariants } from "./animation/animation.js";

const experience_list = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Davao City, Philippines",
    period: "Feb 2026 – Present",
    bullets: [
      "Building BrokersHub, a verified broker collaboration and deal-matching platform for licensed Philippine real estate brokers, using React and a Laravel REST API.",
      "Providing full-stack development services for clients, building and maintaining web applications with React and Laravel.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Linnea Systems",
    location: "Davao City, Philippines",
    period: "Jan 2024 – Jan 2026",
    bullets: [
      "Built and maintained enterprise systems as a fullstack React and Laravel developer.",
      "Developed responsive front-end interfaces backed by a Laravel API.",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Blank Space Outsource",
    location: "Davao City, Philippines",
    period: "Nov 2023",
    bullets: [
      "Delivered Nsmartrac, built on the CodeIgniter framework.",
      "Delivered SparkPro, developed using the Laravel framework.",
    ],
  },
  {
    role: "Front End Developer Intern",
    company: "Codebility",
    location: null,
    period: "Oct 2023 – Jan 2024",
    bullets: [
      "Contributed to development and deployment of the ApexPoint Pharmaceutical and Medical Supplies Manufacturing website.",
      "Built dynamic, responsive interfaces using React, Next.js, and Tailwind CSS.",
    ],
  },
  {
    role: "Service Engineer",
    company: "Vivo Philippines",
    location: "Davao City, Philippines",
    period: "Aug 2021 – Nov 2023",
    bullets: [
      "Diagnosed and resolved mobile device hardware and software issues.",
      "Delivered consistent, high-quality customer service.",
    ],
  },
];

const experience = () => {
  return (
    <section className="experience-sec" id="experience">
      <div className="container project-container">
        <h3 className="experience-h3 mb-5">Work Experience</h3>
        <motion.ul
          variants={ProjectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-list"
        >
          {experience_list.map((exp, index) => (
            <motion.li
              key={index}
              className="experience-item"
              variants={itemVariants}
              transition={{ duration: 0.4 }}
            >
              <span className="experience-dot" aria-hidden="true">
                <span></span>
              </span>
              <div className="experience-header">
                <span className="title">{exp.role}</span>
                <span className="experience-company">{exp.company}</span>
              </div>
              <p className="course">
                {exp.period}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default experience;

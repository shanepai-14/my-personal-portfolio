import React from "react";
import { motion } from "framer-motion";

const experience_list = [
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

const Experience = () => {
  return (
    <section className="experience-sec" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <p className="eyebrow">Experience</p>
          <h2>Work Experience</h2>
        </motion.div>
        <ul className="experience-list">
          {experience_list.map((exp, index) => (
            <motion.li
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="experience-dot" aria-hidden="true">
                <span></span>
              </span>
              <div className="experience-header">
                <span className="experience-role">{exp.role}</span>
                <span className="experience-company">{exp.company}</span>
              </div>
              <p className="experience-meta">
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
        </ul>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import Apexpoint from "../images/projects/apexpoint.png";
import Nsmartrac from "../images/projects/nsmartrac.png";
import Pprd from "../images/projects/pprd.png";
import VismotorLaravel from "../images/projects/vismotor_laravel.png";
import Halifax from "../images/projects/halifax.png";
import Brokershub from "../images/projects/brokershub.png";
import Atss from "../images/projects/atss.png";
import { Github } from "react-bootstrap-icons";
import { FiExternalLink } from "react-icons/fi";
import {
  ProjectVariants,
  headAnimation,
  itemVariants,
} from "../components/animation/animation.js";
import { motion } from "framer-motion";

const selected_projects = [
  {
    title: "Auto-Truck Scheduling System",
    imageurl: Atss,
    description:
      "A vehicle queue and scheduling system built with React and a Laravel REST API, using Material UI for the interface.",
    stack: ["React", "Material UI", "Laravel REST API"],
    liveUrl: "https://alpha.w-locate.com/atss",
    githubUrls: [],
  },
  {
    title: "BrokersHub",
    imageurl: Brokershub,
    description:
      "A verified broker collaboration and deal-matching platform for licensed Philippine real estate brokers, covering listings, buyer requirements, matching, co-broker requests, and transaction tracking in one workflow.",
    stack: ["React", "Laravel REST API", "Tailwind"],
    liveUrl: "https://staging.brokershub.ph/",
    githubUrls: [],
  },
  {
    title: "Halifax Sales and Inventory System",
    imageurl: Halifax,
    description:
      "A sales and inventory management system built with React and a Laravel REST API, using Material UI for the interface.",
    stack: ["React", "Material UI", "Laravel REST API"],
    liveUrl: "https://glasshalifax.site/",
    githubUrls: [
      { label: "GitHub", url: "https://github.com/shanepai-14/halifax-system-fe" },
    ],
  },
  {
    title: "Vismotor App & Admin",
    imageurl: VismotorLaravel,
    description:
      "A customer-facing app and an admin panel built for Vismotor, combining a React front end with a Laravel backend, styled with Material UI and Tailwind CSS.",
    stack: ["React", "Material UI", "Laravel", "Tailwind"],
    liveUrl: "http://vismotor.services/",
    githubUrls: [
      { label: "GitHub (App)", url: "https://github.com/shanepai-14/vismotors-app" },
      { label: "GitHub (Admin)", url: "https://github.com/shanepai-14/vismotors-laravel" },
    ],
  },
  {
    title: "PPRD for DepEd",
    imageurl: Pprd,
    description:
      "A public-facing homepage and an admin panel built for DepEd's PPRD, combining a React front end with a Laravel, Livewire, and Alpine.js backend.",
    stack: ["Laravel", "Livewire", "Alpine.js", "React", "Tailwind"],
    liveUrl: null,
    githubUrls: [
      { label: "GitHub", url: "https://github.com/shanepai-14/pprd-admin-prod" },
    ],
  },
  {
    title: "Apexpoint",
    imageurl: Apexpoint,
    description:
      "A website for ApexPoint Pharmaceutical and Medical Supplies Manufacturing, built with Next.js, TypeScript, and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://apexpointv2.vercel.app/lubie",
    githubUrls: [
      { label: "GitHub", url: "https://github.com/Zeff01/Apexpointv2" },
    ],
  },
  {
    title: "Nsmartrac",
    imageurl: Nsmartrac,
    description:
      "A web application built with CodeIgniter, Bootstrap, and JavaScript.",
    stack: ["CodeIgniter", "Bootstrap", "JavaScript"],
    liveUrl: "https://nsmartrac.com/#",
    githubUrls: [],
  },
];

const more_projects = [
  {
    title: "Fleet GPS Tracking API",
    url: "https://github.com/shanepai-14/mp-be",
    stack: ["Laravel", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "SparkPro",
    url: "https://staging.sprkpro.com/",
    stack: ["Laravel", "Bootstrap", "JavaScript"],
  },
  {
    title: "Student Management System",
    url: "http://davaovision.college/",
    stack: ["Laravel", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    title: "Filmoteka Team Project",
    url: "https://shanepai-14.github.io/filmoteka-js-team-4/",
    stack: ["HTML", "CSS", "JavaScript", "Parcel", "Movie API"],
  },
  {
    title: "Simply Chocolate",
    url: "https://shanepai-14.github.io/bug-buster-first-project/",
    stack: ["SCSS", "HTML", "JavaScript", "Parcel"],
  },
  {
    title: "Philorientpharma Website",
    url: "http://philorientpharma.com/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Seteafy Website",
    url: "https://shanepai-14.github.io/seteafy-website/",
    stack: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Webstudio Website",
    url: "https://shanepai-14.github.io/goit-markup-hw-07/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="project-sec shadow-sm" id="projects"    style={{ backgroundColor: "#F6F6F6" }}>
      <div
        className="container project-container"
      >
        <motion.h1
          initial="hidden"
          variants={headAnimation}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          Projects
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="selected-projects-h2 mb-2"
        >
          Selected Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="selected-projects-subtitle mb-4"
        >
          A few of the systems and sites I've built or contributed to.
        </motion.p>
        <motion.ul
          variants={ProjectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="selected-projects-list list-unstyled"
        >
          {selected_projects.map((project, index) => (
            <motion.li
              variants={itemVariants}
              className="selected-project-row row justify-content"
              key={index}
            >
              <div className="col-md-5">
                <img
                  src={project.imageurl}
                  alt={`${project.title} screenshot`}
                  className="selected-project-img rounded shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="col-md-5 project-description">
                <h3 className="selected-project-title">{project.title}</h3>
                <p className="selected-project-desc">{project.description}</p>
                <p className="selected-project-stack">
                  {project.stack.join(" · ")}
                </p>
                <div className="selected-project-links d-flex gap-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.githubUrls.map((repo, i) => (
                    <a
                      key={i}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github /> {repo.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="more-projects-h2 mt-5 mb-4"
        >
          More Projects
        </motion.h2>
        <motion.ul
          variants={ProjectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="more-projects-list list-unstyled row"
        >
          {more_projects.map((project, index) => (
            <motion.li
              variants={itemVariants}
              className="col-md-4 mb-4"
              key={index}
            >
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.title} <FiExternalLink size={14} />
              </a>
              <span className="more-project-stack">
                {project.stack.join(" · ")}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;

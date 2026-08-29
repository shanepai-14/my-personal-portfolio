import React, { useState } from "react";
import ProjectCard from "./projectcard";
import Seteafy from "../images/projects/seteafyhero.png";
import Philma from "../images/projects/philma.png";
import Dvc from "../images/projects/davaovision.png";
import Myportfolio from "../images/projects/myportfolio.png";
import Webstudio from "../images/projects/webstudio.png";
import Simply from "../images/projects/simplycholate.png";
import Apexpoint from "../images/projects/apexpoint.png";
import Nsmartrac from "../images/projects/nsmartrac.png";
import SparkPro from "../images/projects/spartpro.png";
import Pprd from "../images/projects/pprd.png";
import PprdApp from "../images/projects/pprd_react.png";
import VismotorApp from "../images/projects/vistomor_app.png";
import VismotorLaravel from "../images/projects/vismotor_laravel.png";
import Filmoteka from "../images/projects/filmoteka.png";
import Atss from "../images/projects/atss.png";
import Halifax from "../images/projects/halifax.png";
import { motion } from "framer-motion";

const selected_projects = [
  {
    title: "Halifax Sales and Inventory System",
    desc: "Sales and inventory management system built with React, Material UI, and a Laravel REST API.",
    imageurl: Halifax,
    stack: ["react", "Material UI", "Laravel Rest Api"],
    githubUrl: "https://github.com/shanepai-14/halifax-system-fe",
    liveUrl: "https://glasshalifax.site/",
  },
  {
    title: "Vismotor App",
    desc: "Customer-facing web app built with React, Material UI, Tailwind, and a Laravel REST API.",
    imageurl: VismotorApp,
    stack: ["react", "Material UI", "tailwind", "Laravel Rest Api"],
    githubUrl: "https://github.com/shanepai-14/vismotors-app",
    liveUrl: "https://shanepai-14.github.io/vismotors-app/",
  },
  {
    title: "Vismotor Admin",
    desc: "Admin panel built with Laravel, Blade, and Breeze to manage the Vismotor platform.",
    imageurl: VismotorLaravel,
    stack: ["laravel", "tailwind", "Blade", "Breeze"],
    githubUrl: "https://github.com/shanepai-14/vismotors-laravel",
    liveUrl: "http://vismotor.services/",
  },
  {
    title: "Apexpoint",
    desc: "Website for ApexPoint Pharmaceutical and Medical Supplies Manufacturing, built with Next.js, TypeScript, and Tailwind CSS.",
    imageurl: Apexpoint,
    stack: ["nextjs", "tailwind", "typescript"],
    githubUrl: "https://github.com/Zeff01/Apexpointv2",
    liveUrl: "https://apexpointv2.vercel.app/lubie",
  },
  {
    title: "Student Management System",
    desc: "Student management system built for Davao Vision College with Laravel, jQuery, and Bootstrap.",
    imageurl: Dvc,
    stack: ["laravel", "javascript", "jquery", "bootstrap"],
    githubUrl: "https://github.com/shanepai-14/isms_project",
    liveUrl: "http://davaovision.college/",
  },
  {
    title: "Philorientpharma Website",
    desc: "Company website built with HTML, CSS, and JavaScript.",
    imageurl: Philma,
    stack: ["html", "css", "javascript"],
    githubUrl: "https://github.com/shanepai-14/philorientpharma_website",
    liveUrl: "http://philorientpharma.com/",
  },
];

const other_projects = [
  {
    title: "Vehicle Queue Attendance System",
    imageurl: Atss,
    stack: ["react", "Material UI", "Laravel Rest Api"],
    githubUrl: "#",
    liveUrl: "https://alpha.w-locate.com/atss",
  },
  {
    title: "PPRD Homepage for DEPED",
    imageurl: PprdApp,
    stack: ["react", "tailwind", "Laravel Rest Api"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "PPRD for DEPED",
    imageurl: Pprd,
    stack: ["laravel", "tailwind", "livewire", "Alphine"],
    githubUrl: "https://github.com/shanepai-14/pprd-admin-prod",
    liveUrl: "#",
  },
  {
    title: "Filmoteka Team Project",
    imageurl: Filmoteka,
    stack: ["html", "css", "javascript", "parcel", "Movie API"],
    githubUrl: "https://github.com/shanepai-14/filmoteka-js-team-4",
    liveUrl: "https://shanepai-14.github.io/filmoteka-js-team-4/",
  },
  {
    title: "Nsmartrac",
    imageurl: Nsmartrac,
    stack: ["Codeigniter", "bootstrap", "javascript"],
    githubUrl: "#",
    liveUrl: "https://nsmartrac.com/#",
  },
  {
    title: "SparkPro",
    imageurl: SparkPro,
    stack: ["laravel", "bootstrap", "javascript"],
    githubUrl: "#",
    liveUrl: "https://staging.sprkpro.com/",
  },
  {
    title: "Simply Chocolate",
    imageurl: Simply,
    stack: ["scss", "html", "javascript", "parcel"],
    githubUrl: "https://github.com/shanepai-14/bug-buster-first-project",
    liveUrl: "https://shanepai-14.github.io/bug-buster-first-project/",
  },
  {
    title: "Seteafy Website",
    imageurl: Seteafy,
    stack: ["html", "css", "bootstrap"],
    githubUrl: "https://github.com/shanepai-14/seteafy-website",
    liveUrl: "https://shanepai-14.github.io/seteafy-website/",
  },
  {
    title: "My Personal Portfolio",
    imageurl: Myportfolio,
    stack: ["react", "javascript", "bootstrap"],
    githubUrl: "https://github.com/shanepai-14/my-personal-portfolio",
    liveUrl: "",
  },
  {
    title: "Webstudio Website",
    imageurl: Webstudio,
    stack: ["html", "css", "javascript"],
    githubUrl: "https://github.com/shanepai-14/goit-markup-hw-07",
    liveUrl: "https://shanepai-14.github.io/goit-markup-hw-07/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="project-sec" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <p className="eyebrow">Work</p>
          <h2>Selected Projects</h2>
        </motion.div>
        <motion.ul
          className="selected-projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {selected_projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.ul>

        <div className="more-projects-toggle">
          <button
            type="button"
            className="btn-secondary-cta"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            {showAll ? "Hide Other Projects" : "View All Projects"}
          </button>
        </div>

        {showAll && (
          <motion.ul
            className="more-projects"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {other_projects.map((project, index) => (
              <ProjectCard key={index} project={project} compact />
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
};

export default Projects;

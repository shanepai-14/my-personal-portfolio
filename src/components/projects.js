import React, { useRef } from "react";
import ProjectCard from "./projectcard";
import ProjHris from "../images/projects/hris-login.png";
import Seteafy from "../images/projects/seteafyhero.png";
import Philma from "../images/projects/philma.png";
import Dvc from "../images/projects/davaovision.png";
import Myportfolio from "../images/projects/myportfolio.png";
import Webstudio from "../images/projects/webstudio.png";
import Qrattendance from "../images/projects/qrattendance.png";
import FlutterResume from "../images/projects/flutterresume.png";
import IdEditor from "../images/projects/idEditor.png";
import MovieApp from "../images/projects/movieapp.png";
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
import {
  ProjectVariants,
  headAnimation,
} from "../components/animation/animation.js";
import { useInView, motion } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const projects_list = {
    result: [
        {
        title: "Halifax Sales and Inventory System",
        imageurl: Halifax,
        stack: ["react",'Material UI',"Laravel Rest Api"],
        githubUrl: "https://github.com/shanepai-14/halifax-system-fe",
        liveUrl: "https://glasshalifax.site/",
      },
          {
        title: "Vehicle Queue Attendance System",
        imageurl: Atss,
        stack: ["react",'Material UI',"Laravel Rest Api"],
        githubUrl: "#",
        liveUrl: "https://alpha.w-locate.com/",
      },
      {
        title: "Vismotor App",
        imageurl: VismotorApp,
        stack: ["react",'Material UI', "tailwind","Laravel Rest Api"],
        githubUrl: "https://github.com/shanepai-14/vismotors-app",
        liveUrl: "https://shanepai-14.github.io/vismotors-app/",
      },
      {
        title: "Vismotor Admin",
        imageurl: VismotorLaravel,
        stack: ["laravel", "tailwind","Blade","Breeze"],
        githubUrl: "https://github.com/shanepai-14/vismotors-laravel",
        liveUrl: "http://vismotor.services/",
      },
      {
        title: "PPRD Homepage for DEPED",
        imageurl: PprdApp,
        stack: ["react", "tailwind","Laravel Rest Api"],
        githubUrl: "#",
        liveUrl: "#",
      },
     
      {
        title: "PPRD for DEPED",
        imageurl: Pprd,
        stack: ["laravel", "tailwind","livewire",'Alphine'],
        githubUrl: "https://github.com/shanepai-14/pprd-admin-prod",
        liveUrl: "#",
      },
      {
        title: "Filmoteka Team Project",
        imageurl: Filmoteka,
        stack: ["html", "css","javascript",'parcel','Movie API'],
        githubUrl: "https://github.com/shanepai-14/filmoteka-js-team-4",
        liveUrl: "https://shanepai-14.github.io/filmoteka-js-team-4/",
      },
      {
        title: "Nsmartrac",
        imageurl: Nsmartrac,
        stack: ["Codeigniter", "bootstrap","javascript"],
        githubUrl: "#",
        liveUrl: "https://nsmartrac.com/#",
      },
      {
        title: "SparkPro",
        imageurl: SparkPro,
        stack: ["laravel", "bootstrap",'javascript'],
        githubUrl: "#",
        liveUrl: "https://staging.sprkpro.com/",
      },
      {
        title: "Apexpoint",
        imageurl: Apexpoint,
        stack: ["nextjs", "tailwind", "typescript"],
        githubUrl: "https://github.com/Zeff01/Apexpointv2",
        liveUrl: "https://apexpointv2.vercel.app/lubie",
      },
      {
        title: "Simply Chocolate",
        imageurl: Simply,
        stack: ["scss", "html", "javascript", "parcel"],
        githubUrl: "https://github.com/shanepai-14/bug-buster-first-project",
        liveUrl: "https://shanepai-14.github.io/bug-buster-first-project/",
      },
      {
        title: "Student Management System",
        imageurl: Dvc,
        stack: ["laravel", "javascript", "jquery", "bootstrap"],
        githubUrl: "https://github.com/shanepai-14/isms_project",
        liveUrl: "http://davaovision.college/",
      },
      {
        title: "Philorientpharma Website",
        imageurl: Philma,
        stack: ["html", "css", "javascript"],
        githubUrl: "https://github.com/shanepai-14/philorientpharma_website",
        liveUrl: "http://philorientpharma.com/",
      },

      // Add more objects as needed
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
      {
        title: "Movie App",
        imageurl: MovieApp,
        stack: ["react", "javascript", "API"],
        githubUrl: "https://github.com/shanepai-14/movie-react-app",
        liveUrl: "",
      },
      {
        title: "QR ATTENDANCE",
        imageurl: Qrattendance,
        stack: ["flutter", "firebase"],
        githubUrl: "https://github.com/shanepai-14/qr_attendance",
        liveUrl: "",
      },
      {
        title: "Flutter Resume App",
        imageurl: FlutterResume,
        stack: ["flutter"],
        githubUrl: "https://github.com/shanepai-14/philorientpharma_website",
        liveUrl: "",
      },
      {
        title: "DVC ID EDITOR",
        imageurl: IdEditor,
        stack: ["html", "css", "javascript"],
        githubUrl: "https://github.com/shanepai-14/dvc-id-editor",
        liveUrl: "https://shanepai-14.github.io/dvc-id-editor/",
      },
      {
        title: "HRIS",
        imageurl: ProjHris,
        stack: ["php", "jquery", "mysql", "bootstrap"],
        githubUrl: "https://github.com/shanepai-14/hris-project",
        liveUrl: "",
      },
    ],
  };

  return (
    <section className="project-sec" id="projects">
      <div
        className="container rounded p-5 shadow-sm"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <motion.h1
          ref={ref}
          initial="hidden"
          variants={headAnimation}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          Projects
        </motion.h1>
        <motion.ul
          ref={ref}
          variants={ProjectVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="list-unstyled justify-content-center gap-3 flex-wrap"
        >
          {projects_list?.result.length > 0 ? (
            <>
              {projects_list.result.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </>
          ) : (
            <div className="empty">
              <h2>No Project Found</h2>
            </div>
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;

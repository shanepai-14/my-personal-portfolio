import React from "react";
import { FaJava, FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { Github } from "react-bootstrap-icons";
import  ProjectCard  from "./projectcard";

const projects = () => {
  return (
    <section className="project-sec">
      <div
        className="container rounded p-5"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <h1 className="text-center">Projects</h1>
        <ul className="list-unstyled gap-3 flex-wrap">
       
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
   
   
        </ul>
      </div>
    </section>
  );
};

export default projects;

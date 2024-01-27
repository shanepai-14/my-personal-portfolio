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
import ProjectCard from "./projectcard";
import ProjHris from "../images/projects/hris-login.png";
import Seteafy from "../images/projects/seteafyhero.png";
import FlutterResume from "../images/projects/flutterresume.png";
import Philma from "../images/projects/philma.png";
import Dvc from "../images/projects/davaovision.png";
import Myportfolio from "../images/projects/myportfolio.png";
import Webstudio from "../images/projects/webstudio.png";
const projects = () => {
  const projects_list = {
    result: [
      {
        title: "HRIS",
        imageurl: Philma,
      },
      {
        title: "Another Project",
        imageurl: Dvc,
      },
      // Add more objects as needed
      {
        title: "Another Project",
        imageurl: Seteafy,
      },
      {
        title: "Another Project",
        imageurl: Myportfolio,
      },
      {
        title: "Another Project",
        imageurl: Webstudio,
      },
    ],
  };
  return (
    <section className="project-sec">
      <div
        className="container rounded p-5"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <h1 className="text-center">Projects</h1>
        <ul className="list-unstyled gap-3 flex-wrap">
          {projects_list?.result.length > 0 ? (
            <>
              {projects_list.result.map((project) => (
                <ProjectCard project={project} />
              ))}
            </>
          ) : (
            <div className="empty">
              <h2>No Porject Found</h2>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default projects;

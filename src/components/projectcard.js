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
import Card from "react-bootstrap/Card";
import { FaRegEye } from "react-icons/fa6";
const ProjectCard = ({ project }) => {
  return (
    <li className="card-item shadow">
      <Card
        style={{  backgroundColor: "#F5F5F5" }}
        className="border-0"
      >
        <div className="overflow-hidden position-relative">
          <Card.Img
            variant="top"
            src={project.imageurl}
            // width: "100%",
            // height: "18.3rem",
            // backgroundColor: "#F5F5F5",
            // objectFit: "cover",
          />
          <div
            className="live-eye position-absolute  w-100 text-center"
            style={{ height: "30px" }}
          >
            <FaRegEye />
          </div>
        </div>
        <Card.Body className="">
          <Card.Title className="d-flex justify-content-between">
            {project.title}
            <span>
              <Github className="github" />
            </span>
          </Card.Title>

          <Card.Text></Card.Text>
          <button
            className="btn rounded-pill border-0 small mx-1"
            style={{ backgroundColor: "#D5D5D5", fontSize: "10px" }}
          >
            <FaLaravel /> Laravel
          </button>
          <button
            className="btn rounded-pill border-0"
            style={{ backgroundColor: "#D5D5D5", fontSize: "10px" }}
          >
            <FaJava /> Javascript
          </button>
        </Card.Body>
      </Card>
    </li>
  );
};

export default ProjectCard;

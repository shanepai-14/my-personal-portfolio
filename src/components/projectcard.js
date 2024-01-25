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
import ProjHris from "../images/hris-login.png";

const ProjectCard = () => {
  return (
    <li className="card-item shadow ">
    <Card
      style={{ height: "24.3rem", backgroundColor: "#F5F5F5" }}
      className="border-0"
    >
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          src={ProjHris}
          style={{
            width: "100%",
            height: "18.3rem",
            backgroundColor: "#F5F5F5",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body className="">
        <Card.Title className="d-flex justify-content-between">
          HRIS{" "}
          <span>
            <Github />
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

import React from "react";
import { Github } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Techstack from "./tech-stack-button/stackButton";
import { FaRegEye } from "react-icons/fa6";
import { item } from "../components/animation/animation.js";
import { useInView, motion } from "framer-motion";
const ProjectCard = ({ project }) => {
  return (
    <motion.li
      className="card-item shadow"
      variants={item}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Card style={{ backgroundColor: "#F5F5F5" }} className="border-0">
        <div className="overflow-hidden position-relative">
          <Card.Img
            variant="top"
            src={project.imageurl}

            // width: "100%",
            // height: "18.3rem",
            // backgroundColor: "#F5F5F5",
            // objectFit: "cover",
          />
          {project.liveUrl !== "" ? (
            <div
              className="live-eye position-absolute  w-100 text-center"
              style={{ height: "30px" }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                href={project.liveUrl}
              >
                {" "}
                <FaRegEye /> Live Preview{" "}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <Card.Body className="">
          <Card.Title className="d-flex justify-content-between">
            {project.title}
            <span>
              <a
                style={{ color: "black" }}
                href={project.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <Github className="github" />
              </a>
            </span>
          </Card.Title>

          {project.stack.length > 0 ? (
            <>
              {project.stack.map((techstack) => (
                <Techstack techstack={techstack} />
              ))}
            </>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </motion.li>
  );
};

export default ProjectCard;

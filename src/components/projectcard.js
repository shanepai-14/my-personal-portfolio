import React from "react";
import { Github } from "react-bootstrap-icons";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project, compact }) => {
  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const hasRepo = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.li
      className={compact ? "more-project-card" : "project-card"}
      variants={itemVariants}
      transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <div className="project-thumb">
        <img src={project.imageurl} alt={`${project.title} screenshot`} loading="lazy" />
      </div>
      <div className={compact ? "" : "project-body"}>
        <p className="project-title">{project.title}</p>
        {!compact && project.desc && <p className="project-desc">{project.desc}</p>}
        {project.stack.length > 0 && (
          <div className="project-stack">
            {compact
              ? project.stack.slice(0, 3).map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))
              : project.stack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
          </div>
        )}
        {(hasLive || hasRepo) && (
          <div className="project-links">
            {hasLive && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <FiExternalLink /> Live Demo
              </a>
            )}
            {hasRepo && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.li>
  );
};

export default ProjectCard;

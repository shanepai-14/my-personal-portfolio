import React from "react";
import { FaLaravel, FaHtml5, FaReact, FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiJquery,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMui,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { MdOutlineCloud } from "react-icons/md";
import { motion } from "framer-motion";

const skill_groups = [
  {
    title: "Front End",
    skills: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <IoLogoJavascript />, label: "JavaScript" },
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <IoLogoCss3 />, label: "CSS" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <FaBootstrap />, label: "Bootstrap" },
      { icon: <SiMui />, label: "MUI" },
    ],
  },
  {
    title: "Back End",
    skills: [
      { icon: <FaLaravel />, label: "Laravel" },
      { icon: <FaPhp />, label: "PHP" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiFirebase />, label: "Firebase" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { icon: <SiGit />, label: "Git" },
      { icon: <SiJquery />, label: "jQuery" },
      { icon: <SiFlutter />, label: "Flutter" },
      { icon: <SiDocker />, label: "Docker" },
      { icon: <SiLinux />, label: "Linux" },
      { icon: <MdOutlineCloud />, label: "Laravel Cloud" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="tect-stack" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <p className="eyebrow">Skills</p>
          <h2>Tech Stack</h2>
        </motion.div>
        <div className="skills-grid">
          {skill_groups.map((group, index) => (
            <div className="skills-col" key={index}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill, i) => (
                  <li key={i}>
                    {skill.icon}
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;

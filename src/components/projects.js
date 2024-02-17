import React from "react";
import ProjectCard from "./projectcard";
import ProjHris from "../images/projects/hris-login.png";
import Seteafy from "../images/projects/seteafyhero.png";
import Philma from "../images/projects/philma.png";
import Dvc from "../images/projects/davaovision.png";
import Myportfolio from "../images/projects/myportfolio.png";
import Webstudio from "../images/projects/webstudio.png";
import Qrattendance from "../images/projects/qrattendance.png";
import FlutterResume from "../images/projects/FlutterResume.png";
import IdEditor from "../images/projects/idEditor.png";
import MovieApp from "../images/projects/movieapp.png";
const projects = () => {
  const projects_list = {
    result: [
      {
        title: "Student Management System",
        imageurl: Dvc,
        stack: ["laravel", "javascript","jquery",'bootstrap'],
        githubUrl :"https://github.com/shanepai-14/isms_project",
        liveUrl : "http://davaovision.college/"
      },
      {
        title: "Philorientpharma Website",
        imageurl: Philma,
        stack: ["html","css", "javascript"],
        githubUrl :"https://github.com/shanepai-14/philorientpharma_website",
        liveUrl : "http://philorientpharma.com/"
      },
  
      // Add more objects as needed
      {
        title: "Seteafy Website",
        imageurl: Seteafy,
        stack: ["html","css","bootstrap"],
        githubUrl :"https://github.com/shanepai-14/seteafy-website",
        liveUrl : "https://shanepai-14.github.io/seteafy-website/"
      },
      {
        title: "My Personal Portfolio",
        imageurl: Myportfolio,
        stack: ["react", "javascript","bootstrap"],
        githubUrl :"https://github.com/shanepai-14/my-personal-portfolio",
        liveUrl : ""
      },
      {
        title: "Webstudio Website",
        imageurl: Webstudio,
        stack: ["html","css", "javascript"],
        githubUrl :"https://github.com/shanepai-14/goit-markup-hw-07",
        liveUrl : "https://shanepai-14.github.io/goit-markup-hw-07/"
      },
      {
        title: "Movie App",
        imageurl: MovieApp,
        stack: ["react", "javascript","API"],
        githubUrl :"https://github.com/shanepai-14/movie-react-app",
        liveUrl : ""
      },
      {
        title: "QR ATTENDANCE",
        imageurl: Qrattendance,
        stack: ["flutter", "firebase"],
        githubUrl :"https://github.com/shanepai-14/qr_attendance",
        liveUrl : ""
      },
      {
        title: "Flutter Resume App",
        imageurl: FlutterResume,
        stack: ["flutter"],
        githubUrl :"https://github.com/shanepai-14/philorientpharma_website",
        liveUrl : ""
      },
      {
        title: "DVC ID EDITOR",
        imageurl:IdEditor,
        stack: ["html","css" ,"javascript"],
        githubUrl :"https://github.com/shanepai-14/dvc-id-editor",
        liveUrl : "https://shanepai-14.github.io/dvc-id-editor/"
      },
      {
        title: "HRIS",
        imageurl:ProjHris,
        stack: ["php", "jquery","mysql","bootstrap"],
        githubUrl :"https://github.com/shanepai-14/hris-project",
        liveUrl : ""
      },
    ],
  };
  return (
    <section className="project-sec">
      <div
        className="container rounded p-5 shadow-sm"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <h1 className="text-center mb-5">Projects</h1>
        <ul className="list-unstyled justify-content-center gap-3 flex-wrap">
          {projects_list?.result.length > 0 ? (
            <>
              {projects_list.result.map((project) => (
                <ProjectCard project={project} />
              ))}
            </>
          ) : (
            <div className="empty">
              <h2>No Project Found</h2>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default projects;
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

const StackButton = ({ techstack }) => {
  const capitalizedText = techstack.charAt(0).toUpperCase() + techstack .slice(1);
    const getIcon = () => {
        switch (techstack) {
          case "html":
            return <FaHtml5 />;
          case "css":
            return <IoLogoCss3 />;
          case "javascript":
            return <IoLogoJavascript />;
          case "bootstrap":
            return <FaBootstrap />;
          case "php":
            return <FaPhp />;
          case "react":
            return <FaReact />;
          case "flutter":
            return <SiFlutter />;
          case "firebase":
            return <SiFirebase />;
          case "mysql":
            return <SiMysql />;
          case "jquery":
            return <SiJquery />;
            case "laravel":
              return <FaLaravel />;
          default:
            return null;
        }
      };

    return (
        <button
        className="btn rounded-pill border-0 me-1"
        style={{ backgroundColor: "#D5D5D5", fontSize: "10px" }}
      >
         {getIcon()} {capitalizedText}
      </button>
      
    );
}

export default StackButton;
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

const navbar = () => {
  return (
    <header className="pt-3">
      <div className="container d-flex justify-content-between p-3 align-items-center">
        <p className="h4 shanepai">
          <strong>Shanepai</strong> <span>先輩</span>
        </p>
        <nav className="h-100">
          <ul className="list-unstyled gap-5 justify-content-center align-items-center m-auto mb-0">
            <li>Home</li>
            <li>About me</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </nav>
        <div className="d-flex gap-5">
          <p className="m-auto">
            <MdOutlineEmail fill="#3664f4" size={30}/>
             {" "}shaneenriquez50@gmail.com
          </p>
          <button className="downloadcv">
            Download CV <MdOutlineFileDownload />
          </button>
        </div>
      </div>
    </header>
  );
};

export default navbar;

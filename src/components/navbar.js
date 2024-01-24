import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
const navbar = () => {
  return (
    <header>
      <div className="container d-flex justify-content-between p-3">
        <p>Logo</p>
        <nav>
          <ul className="list-unstyled gap-3">
            <li>Home</li>
            <li>About me</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </nav>
        <div className="d-flex gap-3">
          <p>
            <MdOutlineEmail />
            shaneenriquez50@gmail.com
          </p>
          <button className="btn btn-primary">Download CV <MdOutlineFileDownload/></button>
        </div>
      </div>
    </header>
  );
};

export default navbar;

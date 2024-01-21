import React from "react";

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
          <p>shaneenriquez50@gmail.com</p>
          <button className="btn btn-primary">Download CV</button>
        </div>
      </div>
    </header>
  );
};

export default navbar;

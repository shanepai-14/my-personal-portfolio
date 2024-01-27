import Downloadcv from "./downloadcv";
import { MdOutlineEmail } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header`} style={{ backgroundColor: scrolled ? '#f8f9fd' : 'transparent' ,zIndex: "10"}}>
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
       <Downloadcv />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

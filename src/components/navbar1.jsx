import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import Downloadcv from "./downloadcv";
import { MdOutlineEmail } from "react-icons/md";
function BasicExample() {
  const [scrolled, setScrolled] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`header ${scrolled ? `shadow-sm` : `shadow-none`}`}
      style={{
        backgroundColor: scrolled || toggleDropdown ? "#f8f9fd" : "transparent",
        zIndex: "10",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <p className="h4 shanepai">
            <strong>Shanepai</strong> <span>先輩</span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setToggleDropdown((prev) => !prev)}
        />

        {toggleDropdown && (
          <style jsx>{`
            .navbar-toggler-icon {
              background-image: url("data:image/svg+xml,%3Csvg fill='%23000000' height='800px' width='800px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 460.775 460.775' xml:space='preserve'%3E%3Cpath d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'/%3E%3C/svg%3E");
              transform: rotate(90deg);
              transition: all 250ms ease-in-out;
              fill: black;
              width: 1.2em;
              height: 1.2em;
            }
          `}</style>
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact-me">Contact me</Nav.Link>
          </Nav>
          <div className="d-flex  navbar-buttons">
            <p className=" email">
              <MdOutlineEmail fill="#3664f4" size={30} />{" "}
              shaneenriquez50@gmail.com
            </p>

            <Downloadcv />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

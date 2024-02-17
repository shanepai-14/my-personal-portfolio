import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import Downloadcv from "./downloadcv";
import { MdOutlineEmail } from "react-icons/md";
function BasicExample() {
  const [scrolled, setScrolled] = useState(false);

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
      className="header"
      style={{
        backgroundColor: scrolled ? "#f8f9fd" : "transparent",
        zIndex: "10",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <p className="h4 shanepai">
            <strong>Shanepai</strong> <span>先輩</span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About me</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact me</Nav.Link>
          </Nav>
          <div className="d-flex gap-5">
            <p className="m-auto email">
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

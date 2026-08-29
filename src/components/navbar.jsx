import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import Downloadcv from "./downloadcv.js";

function BasicExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`header ${scrolled ? "shadow-sm" : ""}`}
      as="header"
    >
      <Container>
        <Navbar.Brand href="#home">
          <span className="wordmark">
            Shane <span>Enriquez</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact-me">Contact</Nav.Link>
          </Nav>
          <div className="d-flex navbar-buttons">
            <Downloadcv />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

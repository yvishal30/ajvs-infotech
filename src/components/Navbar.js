import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-dark">
          AJVS Infotech
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${
                  activeLink === item.id ? "active" : ""
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

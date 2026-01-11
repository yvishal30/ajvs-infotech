import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import portfolioImg from "../images/portfolio.png";
import businessImg from "../images/business.png";
import adminImg from "../images/admin.png";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Professional React-based portfolio website.",
    img: portfolioImg
  },
  {
    title: "Business Website",
    desc: "Corporate website for business branding.",
    img: businessImg
  },
  {
    title: "Admin Dashboard",
    desc: "Custom admin dashboard with analytics & controls.",
    img: adminImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="custom-card h-100">
                <Card.Img variant="top" src={project.img} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sparx from "../../Assets/Projects/sparx.png";
import eksam from "../../Assets/Projects/eksam.png";
import jbstore from "../../Assets/Projects/Jb.png";
import acourse from "../../Assets/Projects/acourse.png";
import kontenkilat from "../../Assets/Projects/kontenkilat.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sparx}
              isBlog={false}
              title="SparX"
              description="The parking management system mobile application that is connected to IoT tools is built with the Flutter framework. It has features such as parking slots available in the form of floor plans and visitor density graphs, etc."
              ghLink="https://github.com/Fahrizal0112/Parkol-ParkirOnline.git"
              demoLink="https://drive.google.com/file/d/1VZdU5ebK-pziwKnL34CsuqEE1GhWyTQ8/view?usp=drive_link"
            />
          </Col>

           <Col md={4} className="project-card">
        <ProjectCard
          imgPath={eksam}
          isBlog={false}
          title="Eksam Apps"
          description="Application for Tryout, Tutoring and Online Class Providers in preparation for CPNS, Kedinasan, BUMN, PPPK and PPG tests"
          appStoreLink="https://apps.apple.com/id/app/eksam-cpns-pppk-bumn-ppg/id6476313590"
          playStoreLink="https://play.google.com/store/apps/details?id=com.id.eksam "
          // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
          // demoLink="https://blogs.soumya-jit.tech/"
        />
      </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jbstore}
              isBlog={false}
              title="JBStore"
              description="Application designed to help the online shopping process with a user interface design that is easy to use and features that can help the shopping process go faster
Framework : Flutter"
              ghLink="https://github.com/salsabilafnp/ecom_group2"
              demoLink="https://drive.google.com/file/d/1ggOA1ASuZ4IugkXz78BW-XTofeS2TjIX/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acourse}
              isBlog={false}
              title="Online course"
              description="This project was built to hone my skills in UI slicing using Flutter so that the data used only comes from the Frontend"
              ghLink="https://github.com/KreusnaBayu/Online-Course"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kontenkilat}
              isBlog={true}
              title="Kontenkilat.id"
              description="An application that makes it easy for you to find prompt ideas for marketing your product"
              websiteLink="https://kontenkilat.id/"
              /* demoLink="https://chatify-49.web.app/" */
            />
          </Col>

         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

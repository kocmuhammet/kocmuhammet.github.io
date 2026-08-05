import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
    
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                 <strong className="purple">Hakkımda</strong>
              </h1>
              <Aboutcard />
            </Col>
            
          </Row>
          <h1 className="project-heading">
            Profesyonel <strong className="purple">Beceri Seti </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Kullandığım</strong> Araçlar
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;

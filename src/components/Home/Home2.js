import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/benavatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="home2-heading">
              Kendimi <span className="purple"> Tanıtayım </span>
            </h1>
            <p className="home-about-body">
              Şuan Muğla Sıtkı Koçman Üniversitesi,
              Bilişim Sistemleri Mühendisliği 
              Öğrencisiyim.
              <br />
              <br />
              İlgilendiğim Teknolojiler
              <i>
                <b className="purple">
                  {" "}
                  Html, CSS, JavaScript, Python, Sql, Android, Flutter, C, C#, Node.js, ve Java.{" "}
                </b>
              </i>
              <br />
               Backend ve Frontend yığınlarında kendimi Geliştirmekteyim.
              
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

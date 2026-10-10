import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/benhome.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// 1. DİĞER SAYFALARI (BİLEŞENLERİ) İÇERİ AKTARIYORUZ
import About from "../About/About";
import Projects from "../Projects/Projects";
import Sertifika from "../Sertifika/sertifika";
import Resume from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Merhaba {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Ben
                <strong className="main-name"> Muhammet </strong>
              </h1>

              <div className="typewriter-text">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="text-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-logo-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Kendimi Tanıtayım kısmı */}
      <Home2 />

      

      {/* 2. DİĞER SEKMELERİ ANA SAYFAYA ALT ALTA EKLİYORUZ... */}
      <div id="about-section"><About /></div>
      <div id="projects-section"><Projects /></div>
      <div id="sertifika-section"><Sertifika /></div>
      <div id="resume-section"><Resume /></div>


      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Sosyal Medya Hesaplarım</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kocmuhammet"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammetkoc0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/muhammet_koc_?igsh=MTY4c2JvMGJyaXE0eg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Home;
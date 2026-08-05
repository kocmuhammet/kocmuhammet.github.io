import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


// Kendi projelerinin ekran görüntülerini buraya import edeceksin.
// Şimdilik hata vermemesi için eski resimleri yer tutucu olarak kullanıyoruz.
import test from "../../Assets/Projects/test.jpg";
import hukuk from "../../Assets/Projects/hukuk.png";
import web from "../../Assets/Projects/web.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Son <strong className="purple">Çalışmalarım </strong>
        </h1>
        <p style={{ color: "white" }}>
         Üzerinde Çalıştığım Projeler
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* 1. PROJE: Medikal Bilgi Sistemi */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hukuk}
              isBlog={false}
              title="Avukat Web Sitesi"
              description="Avukatlık Bürosuna yapmış olduğum Html-CSS tabanlı web sitesi uygulaması."
              ghLink="https://github.com/kocmuhammet/huhuk-sitesi"
              
              demoLink="https://zehrabegumyildiz.av.tr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Kişisel Web Sitem"
              description="Kişisel pörtfolyo sitem için JavaSkript tabanlı Geliitirdiğim Sitem."
              ghLink="https://github.com/kocmuhammet/kocmuhammet.github.io"
              demoLink="https://kocmuhammet.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Medikal Bilgi Sistemi"
              description="Hastaneler veya klinikler için geliştirilmiş, hasta kayıtlarının ve tıbbi verilerin yönetildiği kapsamlı bir bilgi sistemi uygulaması."
              ghLink="https://github.com/muhammetkoc0/MedikalBilgiSistemi"
              demoLink="" // Eğer projenin canlı bir web sitesi varsa buraya linkini ekleyebilirsin
            />
          </Col>

          {/* 2. PROJE: Şehiriçi Ulaşım Sistemi */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Şehiriçi Ulaşım Sistemi"
              description="Şehir içi toplu taşıma araçlarının rotalarını, saatlerini ve duraklarını takip etmeyi sağlayan bir ulaşım otomasyon projesi."
              ghLink="https://github.com/kocmuhammet/sehiriciulasimsistemi"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Tatlı sipariş sistemi"
              description="Geliştirdiğim C tabanlı Tatlı Sipariş Sistemi"
              ghLink="https://github.com/kocmuhammet/tatl-siparis-sistemi"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Sinema Büfe Sistemi"
              description="C# kullanarak geliştirdiğim Sinema Büfe Sipariş Uygulaması"
              ghLink="https://github.com/kocmuhammet/sinemabufesistemi"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Görüntü İşleme"
              description="Python Kullanarak Görüntü işleme alanında histogram eşitleme ve rgb kontrolü konstrat ayarlama uygulaması."
              ghLink="https://github.com/kocmuhammet"
              demoLink=""
            />
          </Col>

          {/* YENİ PROJE EKLEMEK İSTERSEN YUKARIDAKİ <Col> BLOKLARINDAN BİRİNİ KOPYALAYIP BURAYA YAPŞTIRABİLİRSİN */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
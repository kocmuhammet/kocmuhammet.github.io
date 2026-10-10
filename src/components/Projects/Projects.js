import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


// Kendi projelerinin ekran görüntülerini buraya import edeceksin.
// Şimdilik hata vermemesi için eski resimleri yer tutucu olarak kullanıyoruz.
import test from "../../Assets/Projects/test.jpg";
import hukuk from "../../Assets/Projects/hukuk.png";
import web from "../../Assets/Projects/web.png";
import yz from "../../Assets/Projects/yz.jpg";
import nexus   from "../../Assets/Projects/nexus.png";


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
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexus}
              isBlog={false}
              title="Nexus Bütünleşik Lojistik Karar Destek Platformu "
              description=" Farklı lojistik ve taşımacılık ihtiyaçlarını tek merkezden yöneten karar destek sistemi (DSS) tasarladım; AFAD acil durum lojistiği,
şehir içi kurye rota planlaması, şehirler arası kargo ve hastaneler arası tıbbi ürün (kan, aşı, organ) taşımacılığı için optimizasyon
algoritmaları geliştirdim."
              ghLink="https://github.com/kocmuhammet/nexus"
              demoLink="" // Eğer projenin canlı bir web sitesi varsa buraya linkini ekleyebilirsin
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yz}
              isBlog={false}
              title="Kişiselleştirilmiş Isıl Konfor Rehberi "
              description=" Anlık hava durumu ve biyometrik verilere göre konfor analizi yapıp giyim tavsiyesi sunan yapay zeka destekli mobil uygulama
geliştirdim; akıllı saat veri akışını ve hava durumu API'lerini entegre ettim"
              ghLink="https://github.com/kocmuhammet/isil_konfor"
              demoLink="" // Eğer projenin canlı bir web sitesi varsa buraya linkini ekleyebilirsin
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hukuk}
              isBlog={false}
              title="Avukat Web Sitesi"
              description="Hukuk blogu, kurumsal ofis tanıtımı ve avukat kişisel sitesi olmak üzere 3 modüllü, modern ve kurumsal bir web arayüzü
tasarladım."
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

          

          {/* 2. PROJE: Şehiriçi Ulaşım Sistemi */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Şehiriçi Ulaşım Sistemi"
              description=" Kartlı geçiş, biniş ve bakiye yönetimi içeren Akbil benzeri toplu taşıma sistemi simülasyonu geliştirdim."
              ghLink="https://github.com/kocmuhammet/sehiriciulasimsistemi"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Tatlı sipariş sistemi"
              description=" Restoran sipariş süreçleri için terminal tabanlı interaktif menü ve sipariş arayüzü programladım"
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
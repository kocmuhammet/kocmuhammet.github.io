import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// Eğer Particle bileşeninin yolu sendeki klasör yapısına göre farklıysa güncellemeyi unutma


// 1. ADIM: Sertifika PDF dosyalarını buraya içe aktarıyoruz
// Kendi dosyalarını Assets klasörüne ekleyip isimlerini burada güncelleyebilirsin.
import sertifika1 from "../../Assets/Muhammet_Koc_VBT.pdf";

// import sertifika2 from "../../Assets/003_Muhammet_Koç_Sertifika3.pdf"; // Yeni eklendikçe buradaki yorumu kaldırıp yolu belirtebilirsin

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF dosyasının tarayıcıda düzgün görünmesi için gerekli ayar
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Sertifika() {
  const [width, setWidth] = useState(1200);

  // 2. ADIM: Sertifikalarımızı bir veri listesi (array) içinde tutuyoruz.
  // Yeni bir sertifika eklemek için bu listeye yeni bir obje { ... } eklemen yeterli!
  const sertifikaListesi = [
    { 
      id: 1, 
      baslik: "VBT Yazılım Aş. Staj Tamamlama Sertifikası", 
      dosya: sertifika1 
    },
   // { 
   //   id: 2, 
    //  baslik: "İleri Düzey Algoritma Sertifikası", 
     // dosya: sertifika2 
  //  },
    // { id: 3, baslik: "Yeni Sertifika Adı", dosya: sertifika3 },
  ];

  // Ekran genişliğini dinleyerek PDF'in boyutunu mobilde ve masaüstünde otomatik ayarlar
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        
        
        {/* Sayfa Ana Başlığı */}
        <h1 className="project-heading text-center" style={{ color: "white", marginBottom: "50px" }}>
          Sahip Olduğum <strong className="purple">Sertifikalar</strong>
        </h1>

        {/* 3. ADIM: Sertifikaları map() ile döndürüp ekrana basıyoruz */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {sertifikaListesi.map((sertifika) => (
            
            /* md={6} kodu sayesinde masaüstünde yan yana 2 sertifika sığar. */
            <Col md={6} key={sertifika.id} className="mb-5 d-flex flex-column align-items-center">
              
              {/* Sertifika Başlığı */}
              <h3 style={{ color: "white", marginBottom: "20px" }}>
                {sertifika.baslik}
              </h3>

              {/* PDF Önizleme Alanı */}
              {/* Birden fazla PDF olacağı için boyutlarını biraz küçülttük (0.8 ve 0.5) */}
              <div className="resume" style={{ marginBottom: "20px", overflow: "hidden" }}>
                <Document file={sertifika.dosya} className="d-flex justify-content-center">
                  <Page pageNumber={1} scale={width > 786 ? 0.8 : 0.5} />
                </Document>
              </div>

              {/* İndirme Butonu */}
              <Button
                variant="primary"
                href={sertifika.dosya}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;İndir
              </Button>
              
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Sertifika;
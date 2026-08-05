import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";


// Kendi CV dosyanı "Assets" klasörünün içine "Muhammet_Koc_CV.pdf" adıyla eklemeyi unutma!
import pdf from "../../Assets/001_Muhammet_Koç_CV.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF dosyasının tarayıcıda düzgün görünmesi için gerekli ayar
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  // Ekran genişliğini dinleyerek PDF'in boyutunu mobilde ve masaüstünde ayarlar
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
     
        
        {/* Üstteki "CV İndir" Butonu */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV İndir
          </Button>
        </Row>

        {/* Ekranda PDF'in görünmesini sağlayan alan */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Alttaki "CV İndir" Butonu */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV İndir
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
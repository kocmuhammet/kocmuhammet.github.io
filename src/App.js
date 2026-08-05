import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Sertifika from "./components/Sertifika/sertifika";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Stillerin içeri aktarılması
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Yüklenme ekranı (preloader) için durum (state) yönetimi
  const [load, updateLoad] = useState(true);

  // Sayfa açıldığında 1.2 saniye (1200ms) yüklenme ekranını göster, sonra gizle
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Yüklenme Ekranı Bileşeni */}
      <Preloader load={load} />
      
      {/* Yüklenme sırasında sayfanın kaydırılmasını (scroll) engelle */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        
        {/* Her sayfada görünecek Üst Menü */}
        <Navbar />
        
        {/* Sayfa değiştiğinde en üste kaydırmayı sağlayan yardımcı bileşen */}
        <ScrollToTop />
        
        {/* Sayfa Yönlendirmeleri (Trafik Polisi) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/sertifika" element={<Sertifika />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* Kullanıcı var olmayan bir linke girerse otomatik anasayfaya at */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        
        {/* Her sayfada görünecek Alt Bilgi */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
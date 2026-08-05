import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
         
            
            Kodlama dışında, beni yaratıcı ve ilham verici tutan aktivitelerle ilgilenmeyi seviyorum:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Oyun Oynamak 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Blog Yazmak ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Seyahat Etmek 🌍
            </li>
            <li className="about-activity">
              <ImPointRight />  Kamp Yapmak ⛺
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fark yaratan şeyler inşa etmeye gayret edin!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammet Koç</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
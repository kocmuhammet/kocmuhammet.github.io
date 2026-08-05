import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Kod <strong className="purple">Yazdığım Günler</strong>
      </h1>
      
      <div className="github-calendar-container">
        <GitHubCalendar
          username="kocmuhammet"
          blockSize={15} 
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          /* Çeviri etiketleri (Labels) buraya ekleniyor */
          labels={{
            totalCount: 'Son 1 yılda {{count}} katkı',
            legend: {
              less: 'Az',
              more: 'Çok'
            }
          }}
        />
      </div>
    </Row>
  );
}

export default Github;
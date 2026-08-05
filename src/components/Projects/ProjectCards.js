import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ position: "relative", zIndex: 2 }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            style={{ position: "relative", zIndex: 3 }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: props.ghLink ? "10px" : "0px",
              position: "relative",
              zIndex: 3,
            }}
          >
            <CgWebsite /> &nbsp;
            {"Canlı Site Link"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
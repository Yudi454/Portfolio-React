import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const MainProjects = ({ color, proyectos }) => {
    console.log(proyectos);
    
  return (
    <div className={`pt-4 pb-4 fondoCuerpo${color}`}>
      <Row>
        {proyectos.map((proyecto) => (
          <Col md={6} className="p-0 d-flex justify-content-center pt-4" key={proyecto.titulo}>
            <Card
              style={{ width: "18rem" }}
              className={`fondoCard${color} texto${color}`}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{proyecto.titulo}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                {proyecto.linkFront && <Button href={proyecto.linkFront} target="_blank" className="me-4">Ir al Front</Button>}
                {proyecto.linkBack && <Button href={proyecto.linkBack} target="_blank">Ir al Back</Button>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainProjects;

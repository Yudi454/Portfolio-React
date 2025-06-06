import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const MainProjects = ({ color, proyectos }) => {
  return (
    <div className={`pt-4 pb-4 fondoCuerpo${color}`}>
      <Row>
        {proyectos.map((proyecto) => (
          <Col
            md={6}
            className="p-0 d-flex justify-content-center pt-4"
            key={proyecto.titulo}
          >
            <Card
              style={{ width: "22rem" }}
              className={`fondoCard${color} texto${color}`}
            >
              <Card.Img variant="top" src={`${proyecto.imagen}`} className="img-fluid" />
              <Card.Body>
                <Card.Title>{proyecto.titulo}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                {proyecto.linkFront && (
                  <Button
                    href={proyecto.linkFront}
                    target="_blank"
                    className={`me-4 btn${color}`}
                  >
                    Ir al Front
                  </Button>
                )}
                {proyecto.linkBack && (
                  <Button href={proyecto.linkBack} target="_blank" className={`btn${color}`}>
                    Ir al Back
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainProjects;

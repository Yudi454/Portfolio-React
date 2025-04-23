import { Button, Card, Col, Row } from "react-bootstrap";
import "../css/Main.css"

export const Main = ({ datos }) => {
  
  return (
    <>
      <Row className="align-items-center">
        {/* Primera Card */}
        <Col lg={4} className="d-flex justify-content-center text-center">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>
                Soy {datos.nombre} {datos.apellido}, tengo {datos.edad} años,
                soy desarrollador full-stack. Me especializo en JavaScript,
                React, Node.js y bases de datos, combinando diseño y lógica para
                construir experiencias completas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Segunda Card */}
        <Col className="Card2 d-flex justify-content-center" lg={4} >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../../public/fotoMia.jpg" />
          </Card>
        </Col>
        {/* Tercera Card */}
        <Col className="Card3 d-flex justify-content-center" lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>Los lenguajes y tecnologias que manejo son:</Card.Text>
              <ul>
                {datos.lenguajesYTecnologias.map((lenguaje, index) => (
                  <li key={index}>{lenguaje.nombre}  <i className={`${lenguaje.icono}`}></i></li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

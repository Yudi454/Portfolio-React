import { Button, Card, Col, Row } from "react-bootstrap";
import "../css/Main.css"

export const Main = ({ datos }) => {
  return (
    <>
      <Row>
        {/* Primera Card */}
        <Col lg={4}>
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
        <Col className="Card2" lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card>
        </Col>
        {/* Tercera Card */}
        <Col className="Card3" lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>Los lenguajes y tecnologias que manejo son:</Card.Text>
              <ul>
                {datos.lenguajesYTecnologias.map((lenguaje, index) => (
                  <li key={index}>{lenguaje}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

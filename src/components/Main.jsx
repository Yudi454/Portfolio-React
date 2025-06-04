import { Button, Card, Col, Row } from "react-bootstrap";
import "../css/Main.css"

export const Main = ({ datos }) => {
  
    const {nombre,apellido,edad,lenguajesYTecnologias} = JSON.parse(localStorage.getItem("datos"))

  return (
    <div className="Main">
      <Row className="align-items-center g-0" >
        {/* Primera Card */}
        <Col lg={4} className="Card1 d-flex justify-content-center text-center">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>
                Soy {nombre} {apellido}, tengo {edad} años,
                soy desarrollador full-stack. Me especializo en JavaScript,
                React, Node.js y bases de datos, combinando diseño y lógica para
                construir experiencias completas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Segunda Card */}
        <Col className="Card2 d-flex justify-content-center" lg={4} >
          <Card className="ImagenRedonda" style={{ width: "18rem" }}>
            <Card.Img className="ImagenRedonda" variant="top" src="../../public/fotoMia.jpg" />
          </Card>
        </Col>
        {/* Tercera Card */}
        <Col className="Card3 d-flex justify-content-center" lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>Los lenguajes y tecnologias que manejo son:</Card.Text>
              <ul>
                {lenguajesYTecnologias.map((lenguaje, index) => (
                  <li key={index}>{lenguaje.nombre}  <i className={`${lenguaje.icono}`}></i></li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

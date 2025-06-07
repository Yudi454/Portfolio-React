import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const MainAboutMe = ({ nombre, apellido, edad, lenguajesYTecnologias,color,t }) => {
  return (
    <div className={`pt-4 pb-4 fondoCuerpo${color} mt-1`}>
      <Row >
        <Col md={6} className="p-0 d-flex align-items-center justify-content-center">
            <Card className="ImagenRedonda" style={{ width: "18rem" }}>
              <Card.Img
                className="ImagenRedonda"
                variant="top"
                src="../../public/fotoMia.jpg"
              />
            </Card>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={12} className="p-0 d-flex justify-content-center mt-2">
              <Card style={{ width: "18rem" }} className={`fondoCard${color}`}>
                <Card.Body className={`texto${color}`}>
                  <Card.Text>
                    {t("soy")} {nombre} {apellido}, {t("tengo")} {edad} {t("años")} , {t("descripcionMia")}
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className="p-0 d-flex justify-content-center mt-4">
              <Card style={{ width: "18rem" }} className={`fondoCard${color}`}>
                <Card.Body className={`texto${color}`}>
                  <Card.Text>
                    {t("lenguajes_y_tecnologias")}
                  </Card.Text>
                  <ul>
                    {lenguajesYTecnologias.map((lenguaje, index) => (
                      <li key={index}>
                        {lenguaje.nombre}{" "}
                        <i className={`${lenguaje.icono}`}></i>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MainAboutMe;

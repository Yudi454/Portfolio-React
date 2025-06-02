import { Col, Row } from "react-bootstrap";

export const Footer = ({redes}) => {

  return (
    <>
      <hr />
      <div className="Footer text-center fw-bold">
        <Row className="align-items-center g-0">
          <Col lg={5}>
          <Row className="g-0">
            <Col lg={12} className="mb-2">© 2025 TuNombre</Col>
            <Col className="mt-3">Todos los derechos reservados</Col>
          </Row>
          </Col>
          <Col lg={3}>
            <Row className="g-0">
              <Col lg={6} className="Inicio">Inicio</Col>
              <Col lg={6} className="SobreMi">Sobre mí</Col>
              <Col lg={6} className="Proyectos">Proyectos</Col>
              <Col lg={6} className="Contacto">Contacto</Col>
            </Row>
          </Col>
          <Col lg={3}>
            <Row className="align-items-center g-0">
              <Col lg={6}>
                <a href={redes[0].link} target="_blank"><i className={redes[0].logo}></i></a>
              </Col>
              <Col lg={6}>
                <a href={redes[1].link} target="_blank" className="text-decoration-none"><i className={redes[1].logo}></i></a>
              </Col>
              <Col>
              <a href={redes[2].link} target="_blank"><i className={redes[2].logo}></i></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

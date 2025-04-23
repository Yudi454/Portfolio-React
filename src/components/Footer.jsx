import { Col, Row } from "react-bootstrap";

export const Footer = () => {
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
                <i className="Github devicon-github-original-wordmark colored"></i>
              </Col>
              <Col lg={6}>
                <i className="LinkedIn devicon-linkedin-plain-wordmark colored"></i>
              </Col>
              <Col>
              <i className="Google fa fa-google" style={{color: "#d93025"}}></i>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

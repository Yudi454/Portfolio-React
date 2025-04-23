import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <hr />
      <div className="Footer text-center">
        <Row>
          <Col lg={5}></Col>
          <Col lg={3}>
            <Row>
              <Col lg={6}>Inicio</Col>
              <Col lg={6}>Sobre mí</Col>
              <Col lg={6}>Proyectos</Col>
              <Col lg={6}>Contacto</Col>
            </Row>
          </Col>
          <Col lg={3}>
            <Row>
              <Col lg={6}>
                <i class="Github devicon-github-original-wordmark colored"></i>
              </Col>
              <Col lg={6}>
                <i class="LinkedIn devicon-linkedin-plain-wordmark colored"></i>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ABOUTME, CONTACT, HOME, PROJECTS } from "../routes/Rutas";

export const Header = () => {
  const { nombre, apellido } = JSON.parse(localStorage.getItem("datos"));

  return (
    <>
      <div className="Header">
        <Row className="d-flex align-items-end">
          <Col md={4}>
            <div>
              <h1 className="ps-2">
                {nombre} {apellido}
              </h1>

              <h2>Desarrollador Web Mern</h2>
            </div>
          </Col>
          <Col md={8} className="">
            <Row>
              <Col md={2} className="pe-3">
                <Link to={ABOUTME}>Acerca de mi</Link>
              </Col>
              <Col md={2}>
                <Link to={CONTACT}>Contanctame</Link>
              </Col>
              <Col md={2}>
                <Link to={PROJECTS}>Proyectos</Link>
              </Col>
              <Col md={2}>
                <Link to={HOME}>Inicio</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

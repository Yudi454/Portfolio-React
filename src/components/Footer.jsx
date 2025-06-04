import { Col, Row } from "react-bootstrap";
import { useStore } from "../store/AuthStore";

export const Footer = () => {
  const { redes } = JSON.parse(localStorage.getItem("datos"));

    const color = useStore((state) => state.color);
  
  
  return (
    <>
      <hr />
      <div className={`fondo${color} text-center fw-bold`}>
        <Row className="align-items-center g-0">
          <Col lg={6}>
            <a href={redes[0].link} target="_blank">
              <i className={redes[0].logo}></i>
            </a>
          </Col>
          <Col lg={6}>
            <a
              href={redes[1].link}
              target="_blank"
              className="text-decoration-none"
            >
              <i className={redes[1].logo}></i>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

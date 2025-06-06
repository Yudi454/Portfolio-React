import { Col, Row } from "react-bootstrap";
import { useStore } from "../store/AuthStore";
import "../css/footer/Footer.css"

export const Footer = () => {
  const { redes } = JSON.parse(localStorage.getItem("datos"));

  const color = useStore((state) => state.color);

  return (
    <>
      <hr />
      <div className={`fondo${color} text-center fw-bold pb-4`}>
        <Row className="align-items-center g-0">
          {redes && redes.map((red) => 
          <Col lg={6} className="pt-4">
            <a href={red.link} target="_blank">
              <i className={`${red.logo} icono`}></i>
            </a>
          </Col>
          )}
        </Row>
      </div>
    </>
  );
};

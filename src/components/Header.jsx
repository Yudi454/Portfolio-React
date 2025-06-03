import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ABOUTME, CONTACT, HOME, PROJECTS } from "../routes/Rutas";
import "../css/cambiar_color/ModoOscuro.css";
import { useStore } from "../store/AuthStore";
import { useTranslation } from "react-i18next";


export const Header = () => {
  const { nombre, apellido } = JSON.parse(localStorage.getItem("datos"));

  const {t,i18n} = useTranslation()

  const color = useStore((state) => state.color);

  const changeColor = useStore((state) => state.changeColor);

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
          <Col md={8}>
            <Row className="text-center">
              <Col md={2} className="pe-3">
                <Link to={ABOUTME}>{t("a_cerca_de_mi")}</Link>
              </Col>
              <Col md={2}>
                <Link to={CONTACT}>{t("contactame")}</Link>
              </Col>
              <Col md={2}>
                <Link to={PROJECTS}>{t("proyectos")}</Link>
              </Col>
              <Col md={2}>
                <Link to={HOME}>{t("inicio")}</Link>
              </Col>
              <Col md={2}>
                <Button
                  className={`btn${color}`}
                  onClick={() =>
                    changeColor(color === "Claro" ? "Oscuro" : "Claro")
                  }
                >
                  {color === "Claro" ? t("modo_oscuro") : t("modo_claro")}
                </Button>
              </Col>
              <Col md={2}>
                <Button
                  onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
                >
                  {i18n.language === "es" ? "Ingles" : "Spanish"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

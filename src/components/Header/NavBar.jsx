import {
  Button,
  Col,
  DropdownButton,
  DropdownItem,
  Nav,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ABOUTME, CONTACT, HOME, PROJECTS } from "../../routes/Rutas";

const NavBar = ({
  nombre,
  apellido,
  t,
  i18n,
  pagina,
  setPagina,
  color,
  changeColor,
  menuAbierto,
  setMenuAbierto,
}) => {
  return (
    <>
      <Row className="d-flex align-items-md-end align-items-sm-start align-items-xs-start">
        <Col md={4} sm={4} xs={12}>
          <div className={`texto${color}`}>
            <h1 className="ps-2">
              {nombre} {apellido}
            </h1>

            <h2>Desarrollador Web Mern</h2>
          </div>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <div className="d-flex d-md-none">
            <button
              onClick={() =>
                menuAbierto ? setMenuAbierto(false) : setMenuAbierto(true)
              }
              className="d-block d-md-none btn btn-primary"
            >
              ☰
            </button>
          </div>
          <div
            className={menuAbierto ? "d-flex d-md-none" : "d-none d-md-none"}
          >
            <ul>
              <li>
                <Link
                  className={`${
                    pagina === "aboutme" && `linkSeleccionado${color}`
                  }texto${color} link${color} fs-5`}
                  to={ABOUTME}
                  onClick={() => setPagina("aboutme")}
                >
                  {t("a_cerca_de_mi")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pagina === "contact" && `linkSeleccionado${color}`
                  } texto${color} link${color} fs-5`}
                  to={CONTACT}
                  onClick={() => setPagina("contact")}
                >
                  {t("contactame")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pagina === "projects" && `linkSeleccionado${color}`
                  } texto${color} link${color} fs-5`}
                  to={PROJECTS}
                  onClick={() => setPagina("projects")}
                >
                  {t("proyectos")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pagina === "" && `linkSeleccionado${color}`
                  } texto${color} link${color} fs-5`}
                  to={HOME}
                  onClick={() => setPagina("")}
                >
                  {t("inicio")}
                </Link>
              </li>
              <li>
                <DropdownButton
                  className={`dropdown${color}`}
                  title="Funciones"
                >
                  <DropdownItem className="p-0" eventKey="1">
                    <Button
                      className={`btnCambiar${color} w-100 `}
                      onClick={() =>
                        changeColor(color === "Claro" ? "Oscuro" : "Claro")
                      }
                    >
                      {color === "Claro" ? t("modo_oscuro") : t("modo_claro")}
                    </Button>
                  </DropdownItem>
                  <DropdownItem className="p-0" eventKey="2">
                    <Button
                      className={`btn${color} w-100`}
                      onClick={() =>
                        i18n.changeLanguage(
                          i18n.language === "es" ? "en" : "es"
                        )
                      }
                    >
                      {i18n.language === "es" ? "Ingles" : "Spanish"}
                    </Button>
                  </DropdownItem>
                </DropdownButton>
              </li>
            </ul>
          </div>
          <Row className="text-center">
            <div className="d-none d-md-flex p-0">
              <Col
                md={3}
                className={pagina === "aboutme" && `linkSeleccionado${color}`}
              >
                <Link
                  className={`texto${color} link${color} fs-5`}
                  to={ABOUTME}
                  onClick={() => setPagina("aboutme")}
                >
                  {t("a_cerca_de_mi")}
                </Link>
              </Col>
              <Col
                md={2}
                className={pagina === "contact" && `linkSeleccionado${color}`}
              >
                <Link
                  className={`texto${color} link${color} fs-5`}
                  to={CONTACT}
                  onClick={() => setPagina("contact")}
                >
                  {t("contactame")}
                </Link>
              </Col>
              <Col
                md={2}
                className={pagina === "projects" && `linkSeleccionado${color}`}
              >
                <Link
                  className={`texto${color} link${color} fs-5`}
                  to={PROJECTS}
                  onClick={() => setPagina("projects")}
                >
                  {t("proyectos")}
                </Link>
              </Col>
              <Col
                md={2}
                className={pagina === "" && `linkSeleccionado${color}`}
              >
                <Link
                  className={`texto${color} link${color} fs-5`}
                  to={HOME}
                  onClick={() => setPagina("")}
                >
                  {t("inicio")}
                </Link>
              </Col>
              <Col md={2}>
                <DropdownButton
                  className={`dropdown${color}`}
                  title={t("funciones")}
                >
                  <DropdownItem className="p-0" eventKey="1">
                    <Button
                      className={`btnCambiar${color} w-100 `}
                      onClick={() =>
                        changeColor(color === "Claro" ? "Oscuro" : "Claro")
                      }
                    >
                      {color === "Claro" ? t("modo_oscuro") : t("modo_claro")}
                    </Button>
                  </DropdownItem>
                  <DropdownItem className="p-0" eventKey="2">
                    <Button
                      className={`btn${color} w-100`}
                      onClick={() =>
                        i18n.changeLanguage(
                          i18n.language === "es" ? "en" : "es"
                        )
                      }
                    >
                      {i18n.language === "es" ? "Ingles" : "Spanish"}
                    </Button>
                  </DropdownItem>
                </DropdownButton>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;

import { Button, Col, DropdownButton, DropdownItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ABOUTME, CONTACT, HOME, PROJECTS } from '../../routes/Rutas'

const NavBar = ({nombre,apellido,t,i18n,pagina,setPagina,color,changeColor}) => {
  return (
    <div>
      <Row className="d-flex align-items-end">
        <Col md={4}>
          <div className={`texto${color}`}>
            <h1 className="ps-2">
              {nombre} {apellido}
            </h1>

            <h2>Desarrollador Web Mern</h2>
          </div>
        </Col>
        <Col md={8}>
          <Row className="text-center">
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
            <Col md={2} className={pagina === "" && `linkSeleccionado${color}`}>
              <Link
                className={`texto${color} link${color} fs-5`}
                to={HOME}
                onClick={() => setPagina("")}
              >
                {t("inicio")}
              </Link>
            </Col>
            <Col md={2}>
              <DropdownButton className={`dropdown${color}`} title="Funciones">
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
                      i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
                    }
                  >
                    {i18n.language === "es" ? "Ingles" : "Spanish"}
                  </Button>
                </DropdownItem>
              </DropdownButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default NavBar

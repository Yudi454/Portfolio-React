import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export const Main = () => {

  const [cardYBoton1,setCardYBoton1] = useState(false);

  const [card2,setCard2] = useState(false);


  const mostrarCardYBoton1 = () => {
    setCardYBoton1(true)
  }

  const mostrarCard2 = () => {
    setCard2(true)
  }

  return (
    <>
      <Row>
        {/* Primera Card */}
        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Primer boton */}
        <Col lg={1}>
          <div onClick={mostrarCardYBoton1}>
            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </Col>
        {/* Segunda Card */}
        <Col className={!cardYBoton1 ? "d-none" : ""} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Segundo Boton */}
        <Col lg={1}>
        <div onClick={mostrarCard2} className={!cardYBoton1 ? "d-none" : ""} >
          <i className="bi bi-arrow-right-circle"></i>
        </div>
        </Col>
        {/* Tercera Card */}
        <Col className={!card2 ? "d-none" : ""} lg={3}>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
